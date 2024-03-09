import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessageScreen from "../../Screens/Message/MessageScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import { useTranslation } from "react-i18next";
const MyMessageStack = createStackNavigator();
const MessageStack = () => {
  const { t } = useTranslation();
  return (
    <MyMessageStack.Navigator>
      <MyMessageStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: t("message"),
          headerLeft: () => null,
        }}
      />
      <MyMessageStack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{ headerShown: false }}
      />
      <MyMessageStack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          title: t("userDetail"),
        }}
      />
    </MyMessageStack.Navigator>
  );
};
export default MessageStack;
