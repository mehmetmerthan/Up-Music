import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../../Screens/Settings/SettingsScreen";
import PolicyScreen from "../../Screens/Settings/PolicyScreen";
import ChangePasswordScreen from "../../Screens/Settings/ChangePasswordScreen";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();

const SettingsStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: t("settings"),
        }}
      />
      <Stack.Screen
        name="PolicyScreen"
        component={PolicyScreen}
        options={{
          title: t("privacyPolicy"),
        }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          title: t("changePassword"),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsStack;
