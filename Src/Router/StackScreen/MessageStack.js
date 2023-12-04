import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "../../Screens/Message/MessageScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";

const MyMessageStack = createStackNavigator();
const MessageStack = () => (
  <MyMessageStack.Navigator>
    <MyMessageStack.Screen
      name="MessageScreen"
      component={MessageScreen}
      options={{
        title: "Message"
      }}
    />
    <MyMessageStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{
        title: "",
      }}
    />
    <MyMessageStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
  </MyMessageStack.Navigator>
);

export default MessageStack;