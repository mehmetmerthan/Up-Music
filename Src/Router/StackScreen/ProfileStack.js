import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../Screens/Profile/ProfileScreen";
import EditPorfileScreen from "../../Screens/Profile/EditProfileScreen";
import EditProfileCompany from "../../Screens/Profile/EditProfileCompany";
import SettingsStack from "./SettingsStack";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
const ProfileStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: t("profile"),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditPorfileScreen}
        options={{
          title: t("editProfile"),
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
          title: t("editProfile"),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
