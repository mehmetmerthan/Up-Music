import AnnouncementsScreen from "../../../../Screens/Home/Announcements/AnnouncementsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AnnouncementsFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsFilterScreen";
import React from "react";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import AnnouncementsMusiciansStack from "./AnnouncementsMusiciansStack";
import AnnouncementsVisualArtistsScreen from "../../../../Screens/Home/Announcements/AnnouncementsVisualArtistsScreen";
import AnnouncementsBandsScreen from "../../../../Screens/Home/Announcements/AnnouncementsBandsScreen";
import AnnouncementsStagesScreen from "../../../../Screens/Home/Announcements/AnnouncementsStagesScreen";
import AnnouncementsVisualArtistsFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsVisualArtistsFilterScreen";
import AnnouncementsBandsFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsBandsFilterScreen";
import AnnouncementsStagesFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsStagesFilterScreen";

const Stack = createStackNavigator();
export default function AnnouncementsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnnouncementsScreen"
        component={AnnouncementsScreen}
        options={{
          headerShown: true,
          title: "Announcements",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsMusiciansStack"
        component={AnnouncementsMusiciansStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="AnnouncementsVisualArtistsScreen"
        component={AnnouncementsVisualArtistsScreen}
        options={{
          headerShown: true,
          title: "Visual Artists",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsVisualArtistsFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsBandsScreen"
        component={AnnouncementsBandsScreen}
        options={{
          headerShown: true,
          title: "Bands",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsBandsFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsStagesScreen"
        component={AnnouncementsStagesScreen}
        options={{
          headerShown: true,
          title: "Stages",
          headerRight: () => (
            <HeaderRight screenName="AnnouncementsStagesFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsFilterScreen"
        component={AnnouncementsFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />

      <Stack.Screen
        name="AnnouncementsVisualArtistsFilterScreen"
        component={AnnouncementsVisualArtistsFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsBandsFilterScreen"
        component={AnnouncementsBandsFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsStagesFilterScreen"
        component={AnnouncementsStagesFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
