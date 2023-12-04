import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Event from "../../Screens/Home/EventScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
const MyEventStack = createStackNavigator();

const EventStack = () => (
  <MyEventStack.Navigator>
    <MyEventStack.Screen
      name="Event"
      component={Event}
      options={{ headerShown: false }}
    />
    <MyEventStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
    <MyEventStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
  </MyEventStack.Navigator>
);

export default EventStack;
