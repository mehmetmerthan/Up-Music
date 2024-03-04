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
        title: "Message",
        headerLeft: () => null,
      }}
    />
    <MyMessageStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{ headerShown: false}}
    />
    <MyMessageStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        title: "User Detail",
      }}
    />
  </MyMessageStack.Navigator>
);

export default MessageStack;
