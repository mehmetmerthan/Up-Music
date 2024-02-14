import AnnouncementsScreen from "../../../../Screens/Home/Announcements/AnnouncementsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AnnouncementsFilterScreen from "../../../../Screens/Filter/Announcements/AnnouncementsFilterScreen";
import ManagementStack from "./ManagementStack";
import PerformanceStack from "./PerformanceStack";
import ProducersStack from "./ProducersStack";
import TechnicalStack from "./TechnicalStack";
import VisualStack from "./VisualStack";
import React from "react";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import UserDetailScreen from "../../../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../../../Screens/Message/MessageDetailScreen";
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
        name="AnnouncementsManagementStack"
        component={ManagementStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="AnnouncementsPerformanceStack"
        component={PerformanceStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="AnnouncementsProducersStack"
        component={ProducersStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="AnnouncementsTechnicalStack"
        component={TechnicalStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="AnnouncementsVisualStack"
        component={VisualStack}
        options={{
          headerShown: false,
          title: "",
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
