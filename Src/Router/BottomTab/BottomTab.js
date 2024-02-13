import { React, useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import MessageStack from "../StackScreen/MessageStack";
import CreateStackScreen from "../StackScreen/CreateStack";
import NotificationStackScreen from "../StackScreen/NotificationStack";
import ProfileStackScreen from "../StackScreen/ProfileStack";
import HomeStack from "../StackScreen/HomeStack/HomeStack";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import * as Notifications from "expo-notifications";
import {
  fetchLastMessage,
  fetchUnreadMessages,
} from "../../Utils/FetchMessage";
import { useNavigation } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
function BottomTab({ screenIndex }) {
  const navigation = useNavigation();
  const [unreadCount, setUnreadCount] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    const onCreateMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages({ setUnreadCount });
        if (screenIndex !== 1) {
          fetchLastMessage();
        }
      },
    });
    const onUpdateMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onUpdateMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages({ setUnreadCount });
      },
    });
    const onDeleteMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onDeleteMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages({ setUnreadCount });
      },
    });
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("notification triggered ", notification);
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        navigation.navigate("MessageDetailScreen", {
          senderId: response.notification.request.content.data.senderId,
        });
      });
    fetchUnreadMessages();
    return () => {
      onCreateMessageSubscription.unsubscribe();
      onUpdateMessageSubscription.unsubscribe();
      onDeleteMessageSubscription.unsubscribe();
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
      onCreateMessageSubscription.unsubscribe();
    };
  }, []);
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message" color={color} size={size} />
          ),
          headerShown: false,
          tabBarBadge: unreadCount,
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          headerShown: false,
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
