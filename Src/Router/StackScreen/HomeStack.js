import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
const MyHomeStack = createStackNavigator();

const HomeStack = () => (
  <MyHomeStack.Navigator>
    <MyHomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MyHomeStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{ headerShown: false }}
    />
  </MyHomeStack.Navigator>
);

export default HomeStack;
