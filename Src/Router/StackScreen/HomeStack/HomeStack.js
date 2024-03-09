import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../Screens/Home/HomeScreen";
import StagesScreen from "../../../Screens/Home/StagesScreen";
import EventsScreen from "../../../Screens/Home/EventsScreen";
import EventsFilterScreen from "../../../Screens/Filter/EventsFilterScreen";
import StagesFilterScreen from "../../../Screens/Filter/StagesFilterScreen";
import AnnouncementStack from "./Announcements/AnnouncementStack";
import ProfilesStack from "./Profiles/ProfilesStack";
import HeaderRight from "../../../Components/PostComponents/Headers/HeaderRight";
import UserDetailScreen from "../../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../../Screens/Message/MessageDetailScreen";
import CompaniesScreen from "../../../Screens/Home/CompaniesScreen";
import ApplyCompanyScreen from "../../../Screens/Home/ApplyCompanyScreen";
import MessageScreen from "../../../Screens/Message/MessageScreen";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
const HomeStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: t("home"),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="CompaniesScreen"
        component={CompaniesScreen}
        options={{
          headerShown: true,
          title: t("companies"),
        }}
      />
      <Stack.Screen
        name="ApplyCompanyScreen"
        component={ApplyCompanyScreen}
        options={{
          headerShown: true,
          title: t("apply"),
        }}
      />
      <Stack.Screen
        name="AnnouncementsStack"
        component={AnnouncementStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="StagesScreen"
        component={StagesScreen}
        options={{
          headerShown: true,
          title: t("stage"),
          headerRight: () => <HeaderRight screenName={"StagesFilterScreen"} />,
        }}
      />
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: true,
          title: t("event"),
          headerRight: () => <HeaderRight screenName={"EventsFilterScreen"} />,
        }}
      />
      <Stack.Screen
        name="ProfilesStack"
        component={ProfilesStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="EventsFilterScreen"
        component={EventsFilterScreen}
        options={{
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="StagesFilterScreen"
        component={StagesFilterScreen}
        options={{
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          title: t("userDetail"),
        }}
      />
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: t("message"),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{
          title: t("message"),
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
});
