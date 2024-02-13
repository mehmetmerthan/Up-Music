import MusicianSearchScreen from "../../../Screens/Home/Announcements/MusicianSearchScreen";
import GroupSearchScreen from "../../../Screens/Home/Announcements/GroupSearchScreen";
import AnnouncementsScreen from "../../../Screens/Home/Announcements/AnnouncementsScreen";
import UserDetailScreen from "../../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../../Screens/Message/MessageDetailScreen";
import AnnouncementsFilterScreen from "../../../Screens/Filter/Announcements/AnnouncementsFilterScreen";
import GroupSearchFilterScreen from "../../../Screens/Filter/Announcements/GroupSearchFilterScreen";
import MusicianSearchFilterScreen from "../../../Screens/Filter/Announcements/MusicianSearchFilterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileHeaderRight from "../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeaderRight";
import React from "react";
const Stack = createStackNavigator();
export default function AnnouncementStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnnouncementsScreen"
        component={AnnouncementsScreen}
        options={{
          headerShown: true,
          title: "Announcements",
        }}
      />
      <Stack.Screen
        name="MusicianSearchScreen"
        component={MusicianSearchScreen}
        options={{
          headerShown: true,
          title: "Musician Search",
          headerRight: ProfileHeaderRight,
        }}
      />
      <Stack.Screen
        name="GroupSearchScreen"
        component={GroupSearchScreen}
        options={{
          headerShown: true,
          title: "Group Search",
          headerRight: ProfileHeaderRight,
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
      <Stack.Screen
        name="AnnouncementsFilterScreen"
        component={AnnouncementsFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="GroupSearchFilterScreen"
        component={GroupSearchFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="MusicianSearchFilterScreen"
        component={MusicianSearchFilterScreen}
        options={{
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
