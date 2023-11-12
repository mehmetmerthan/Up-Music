import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
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
  </MyProfileStack.Navigator>
);

export default ProfileStack;
