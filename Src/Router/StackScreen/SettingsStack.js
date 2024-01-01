import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../Screens/Settings/SettingsScreen";
const MySettingsStack = createStackNavigator();

const SettingsStack = () => (
  <MySettingsStack.Navigator>
    <MySettingsStack.Screen
      name="Settings"
      component={Settings}
      options={{ headerShown: false }}
    />
  </MySettingsStack.Navigator>
);

export default SettingsStack;
