import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import EditPorfileScreen from "../../Screens/Profile/EditProfileScreen";
const MyProfileStack = createStackNavigator();

const ProfileStack = () => (
  <MyProfileStack.Navigator>
    <MyProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: "Profile" 
      }}
    />
    <MyProfileStack.Screen
      name="EditProfileScreen"
      component={EditPorfileScreen}
      options={{
        title: "Edit Profile" 
      }}
    />
  </MyProfileStack.Navigator>
);

export default ProfileStack;
