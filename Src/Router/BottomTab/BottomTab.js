import { React, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import MessageStack from "../StackScreen/MessageStack";
import CreateStackScreen from "../StackScreen/CreateStack";
import NotificationStackScreen from "../StackScreen/NotificationStack";
import ProfileStackScreen from "../StackScreen/ProfileStack";
import HomeStack from "../StackScreen/HomeStack";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import { listMessages } from "../../graphql/queries";
import { getUserId } from "../../Utils/getUser";
const Tab = createBottomTabNavigator();
function BottomTab() {
  const [unreadCount, setUnreadCount] = useState(null);
  useEffect(() => {
    const fetchUnreadMessages = async () => {
      try {
        const userId = await getUserId();
        const variables = {
          filter: {
            userMessagesReceivedId: { eq: userId },
            hasMessagesReceiver: { eq: true },
            isRead: { eq: false },
          },
        };
        const result = await API.graphql(
          graphqlOperation(listMessages, variables)
        );
        const unreadMessages = result?.data?.listMessages?.items;
        if (unreadMessages.length === 0) {
          setUnreadCount(null);
        } else {
          setUnreadCount(unreadMessages.length);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const onCreateMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages();
      },
    });

    const onUpdateMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onUpdateMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages();
      },
    });

    const onDeleteMessageSubscription = API.graphql(
      graphqlOperation(subscriptions.onDeleteMessage)
    ).subscribe({
      next: () => {
        fetchUnreadMessages();
      },
    });

    fetchUnreadMessages();

    return () => {
      onCreateMessageSubscription.unsubscribe();
      onUpdateMessageSubscription.unsubscribe();
      onDeleteMessageSubscription.unsubscribe();
    };
  }, []);

  const fetchLastMessage = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.attributes.sub;
    try {
      const variables = {
        limit: 1,
        type: "message",
        sortDirection: "DESC",
        filter: {
          userMessagesReceivedId: { eq: userId },
          hasMessagesReceiver: { eq: true },
          isRead: { eq: false },
        },
      };
      const result = await API.graphql(
        graphqlOperation(messagesByDate, variables)
      );
      const message = result?.data?.messagesByDate?.items;
      if (message && message.length > 0 && screenName !== "MessageScreen") {
        const lastMessage = message[0];
      }
    } catch (error) {
      console.log(error);
    }
  };
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
