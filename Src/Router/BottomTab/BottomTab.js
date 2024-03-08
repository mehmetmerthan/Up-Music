import { React, useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
function BottomTab({ screenName }) {
  const navigation = useNavigation();
  const [unreadCount, setUnreadCount] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    getPermission();
    const onCreateMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages({ setUnreadCount });
        console.log(screenName);
        if (
          screenName !== "MessageDetailScreen" &&
          screenName !== "MessageScreen"
        ) {
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
      Notifications.addNotificationReceivedListener((notification) => {});
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        navigation.navigate("MessageDetailScreen", {
          senderId: response.notification.request.content.data.senderId,
        });
      });
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
  }, [screenName]);
  useEffect(() => {
    fetchUnreadMessages({ setUnreadCount });
  }, [unreadCount]);
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  async function getPermission() {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        return;
      }
    }
  }
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
            <Ionicons name="create-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="notifications-circle-outline"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
