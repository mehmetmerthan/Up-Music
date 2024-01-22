import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
import FilterScreen from "../../Screens/FilterScreen";
const MyHomeStack = createStackNavigator();
const HomeStack = () => {
  return (
    <MyHomeStack.Navigator>
      <MyHomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Home",
        }}
      />
      <MyHomeStack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
      <MyHomeStack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
      <MyHomeStack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
    </MyHomeStack.Navigator>
  );
};

export default HomeStack;
