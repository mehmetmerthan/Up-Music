import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "../../Screens/Notification/NotificationScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
const MyNotificationStack = createStackNavigator();
const NotificationStack = () => (
  <MyNotificationStack.Navigator>
    <MyNotificationStack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
      options={{
        title: "Notification",
        headerLeft: () => null,
      }}
    />
    <MyNotificationStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
          <MyNotificationStack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
  </MyNotificationStack.Navigator>
);

export default NotificationStack;