import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ManagementScreen from "../../../../Screens/Home/Announcements/Management/ManagementScreen";
import ManagementFilterScreen from "../../../../Screens/Filter/Announcements/Management/ManagementFilterScreen";
import ManagerScreen from "../../../../Screens/Home/Announcements/Management/ManagerScreen";
import ManagerFilterScreen from "../../../../Screens/Filter/Announcements/Management/ManagerFilterScreen";
import PublicistScreen from "../../../../Screens/Home/Announcements/Management/PublicistScreen";
import PublicistFilterScreen from "../../../../Screens/Filter/Announcements/Management/PublicistFilterScreen";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
const Stack = createStackNavigator();
export default function ManagementStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnnouncementsManagementScreen"
        component={ManagementScreen}
        options={{
          headerShown: true,
          title: "Profiles",
          headerRight: () => (
            <HeaderRight screenName="ManagementFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsManagerScreen"
        component={ManagerScreen}
        options={{
          headerShown: true,
          title: "Manager",
          headerRight: () => (
            <HeaderRight screenName="ManagerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsPublicistScreen"
        component={PublicistScreen}
        options={{
          headerShown: true,
          title: "Publicist",
          headerRight: () => (
            <HeaderRight screenName="PublicistFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsManagementFilterScreen"
        component={ManagementFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsManagerFilterScreen"
        component={ManagerFilterScreen}
        options={{
          headerShown: false,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsPublicistFilterScreen"
        component={PublicistFilterScreen}
        options={{
          headerShown: false,
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
