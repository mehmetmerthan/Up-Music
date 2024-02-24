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
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Home",
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="CompaniesScreen"
        component={CompaniesScreen}
        options={{
          headerShown: true,
          title: "Companies",
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
          title: "Stages",
          headerRight: () => <HeaderRight screenName={"StagesFilterScreen"} />,
        }}
      />
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: true,
          title: "Events",
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
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="StagesFilterScreen"
        component={StagesFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          title: "User Detail",
        }}
      />
      <Stack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{
          title: "Message",
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
