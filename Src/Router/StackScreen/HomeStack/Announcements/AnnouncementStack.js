import AnnouncementsScreen from "../../../../Screens/Home/Announcements/AnnouncementsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AnnouncementsFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsFilterScreen";
import React from "react";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import UserDetailScreen from "../../../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../../../Screens/Message/MessageDetailScreen";
import AnnouncementsMusiciansStack from "./AnnouncementsMusiciansStack";
import AnnouncementsVisualArtistsScreen from "../../../../Screens/Home/Announcements/AnnouncementsVisualArtistsScreen";
import AnnouncementsBandsScreen from "../../../../Screens/Home/Announcements/AnnouncementsBandsScreen";
import AnnouncementsStagesScreen from "../../../../Screens/Home/Announcements/AnnouncementsStagesScreen";
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
          title: "Artists",
        }}
      />
      <Stack.Screen
        name="AnnouncementsBandsScreen"
        component={AnnouncementsBandsScreen}
        options={{
          headerShown: true,
          title: "Bands",
        }}
      />
      <Stack.Screen
        name="AnnouncementsStagesScreen"
        component={AnnouncementsStagesScreen}
        options={{
          headerShown: true,
          title: "Stages",
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
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
