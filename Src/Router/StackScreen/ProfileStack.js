import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import EditPorfileScreen from "../../Screens/Profile/EditProfileScreen";
import SettingsScreen from "../../Screens/Profile/SettingsScreen";
import EditPorfileCompany from "../../Screens/Profile/EditProfileCompany";
const Stack = createStackNavigator();
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: "Profile",
      }}
    />
    <Stack.Screen
      name="EditProfileScreen"
      component={EditPorfileScreen}
      options={{
        title: "Edit Profile",
      }}
    />
    <Stack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        title: "Settings",
      }}
    />
    <Stack.Screen
      name="EditPorfileCompany"
      component={EditPorfileCompany}
      options={{
        title: "Edit Profile",
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
