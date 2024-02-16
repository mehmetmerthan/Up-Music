import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import AnnouncementsCollaborationScreen from "../../../../Screens/Home/Announcements/AnnouncementsMusicians/AnnouncementsCollaborationScreen";
import AnnouncementsJoinGroupScreen from "../../../../Screens/Home/Announcements/AnnouncementsMusicians/AnnouncementsJoinGroupScreen";
import AnnouncementsCollaborationFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsMusicians/AnnouncementsCollaborationFilterScreen";
import AnnouncementsJoinGroupFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsMusicians/AnnouncementsJoinGroupFilterScreen";
import AnnouncementsMusiciansScreen from "../../../../Screens/Home/Announcements/AnnouncementsMusicians/AnnouncementsMusiciansScreen";
const Stack = createStackNavigator();

export default function AnnouncementsMusiciansStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnnouncementsMusiciansScreen"
        component={AnnouncementsMusiciansScreen}
        options={{
          headerShown: true,
          title: "Musicians",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsMusiciansFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsCollaborationScreen"
        component={AnnouncementsCollaborationScreen}
        options={{
          headerShown: true,
          title: "Musicians",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsCollaborationFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsJoinGroupScreen"
        component={AnnouncementsJoinGroupScreen}
        options={{
          headerShown: true,
          title: "Musicians",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsJoinGroupFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsCollaborationFilterScreen"
        component={AnnouncementsCollaborationFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsJoinGroupFilterScreen"
        component={AnnouncementsJoinGroupFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
