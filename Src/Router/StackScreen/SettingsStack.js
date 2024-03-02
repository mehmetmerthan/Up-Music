import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../Screens/Settings/SettingsScreen";
import PolicyScreen from "../../Screens/Settings/PolicyScreen";
import ChangePasswordScreen from "../../Screens/Settings/ChangePasswordScreen";
const Stack = createStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        title: "Settings",
      }}
    />
    <Stack.Screen
      name="PolicyScreen"
      component={PolicyScreen}
      options={{
        title: "Privacy Policy",
      }}
    />
    <Stack.Screen
      name="ChangePasswordScreen"
      component={ChangePasswordScreen}
      options={{
        title: "Change Password",
      }}
    />
  </Stack.Navigator>
);

export default SettingsStack;
