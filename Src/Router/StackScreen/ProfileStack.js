import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import EditPorfileScreen from "../../Screens/Profile/EditProfileScreen";
import SettingsScreen from "../../Screens/Profile/SettingsScreen";
const MyProfileStack = createStackNavigator();

const ProfileStack = () => (
  <MyProfileStack.Navigator>
    <MyProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: "Profile",
      }}
    />
    <MyProfileStack.Screen
      name="EditProfileScreen"
      component={EditPorfileScreen}
      options={{
        title: "Edit Profile",
      }}
    />
    <MyProfileStack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        title: "Settings",
      }}
    />
  </MyProfileStack.Navigator>
);

export default ProfileStack;
