import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import EditPorfileScreen from "../../Screens/Profile/EditProfileScreen";
import EditProfileCompany from "../../Screens/Profile/EditProfileCompany";
import SettingsStack from "./SettingsStack";
const Stack = createStackNavigator();
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: "Profile",
        headerLeft: () => null,
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
      name="SettingsStack"
      component={SettingsStack}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfileCompany"
      component={EditProfileCompany}
      options={{
        title: "Edit Profile",
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
