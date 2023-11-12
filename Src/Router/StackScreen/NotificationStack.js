import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "../../Screens/Notification/NotificationScreen";
const MyNotificationStack = createStackNavigator();
const NotificationStack = () => (
  <MyNotificationStack.Navigator>
    <MyNotificationStack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
      options={{
        title: "Notification" 
      }}
    />
  </MyNotificationStack.Navigator>
);

export default NotificationStack;