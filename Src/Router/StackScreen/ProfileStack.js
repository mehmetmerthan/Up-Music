import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import EditPorfileScreen from "../../Screens/Profile/EditProfileScreen";
import UserProfile from "../../Components/UserComponents/UserProfile";
import LocationPicker from "../../Components/PickerComponents/LocationPicker";
import Tag from "../../Components/TagComponents/Tag";
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
      name="LocationPicker"
      component={LocationPicker}
      options={{
        title: "Select Location",
      }}
    />
    <MyProfileStack.Screen
      name="Tag"
      component={Tag}
      options={{
        title: "Select Tags",
      }}
    />
  </MyProfileStack.Navigator>
);

export default ProfileStack;
