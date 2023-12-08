import React from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import { useLocation } from "../../Components/PickerComponents/useLocation";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";

const MyHomeStack = createStackNavigator();

const HomeStack = () => {
  const { LocationPicker } = useLocation();
  return (
    <MyHomeStack.Navigator>
      <MyHomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
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
    </MyHomeStack.Navigator>
  )
};

export default HomeStack;
