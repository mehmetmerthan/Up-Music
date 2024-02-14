import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InstrumentalistScreen from "../../../../Screens/Home/Announcements/Performance/InstrumentalistScreen";
import PerformanceScreen from "../../../../Screens/Home/Announcements/Performance/PerformanceScreen";
import SingerScreen from "../../../../Screens/Home/Announcements/Performance/SingerScreen";
import InstrumentalistFilterScreen from "../../../../Screens/Filter/Announcements/Performance/InstrumentalistFilterScreen";
import PerformanceFilterScreen from "../../../../Screens/Filter/Announcements/Performance/PerformanceFilterScreen";
import SingerFilterScreen from "../../../../Screens/Filter/Announcements/Performance/SingerFilterScreen";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
const Stack = createStackNavigator();
export default function PerformanceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnnouncementsPerformanceScreen"
        component={PerformanceScreen}
        options={{
          headerShown: true,
          title: "Performance",
          headerRight: () => (
            <HeaderRight screenName="PerformanceFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsInstrumentalistScreen"
        component={InstrumentalistScreen}
        options={{
          headerShown: true,
          title: "Instrumentalist",
          headerRight: () => (
            <HeaderRight screenName="InstrumentalistFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsSingerScreen"
        component={SingerScreen}
        options={{
          headerShown: true,
          title: "Publicist",
          headerRight: () => (
            <HeaderRight screenName="SingerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsInstrumentalistFilterScreen"
        component={InstrumentalistFilterScreen}
        options={{
          headerShown: true,
          title: "filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsPerformanceFilterScreen"
        component={PerformanceFilterScreen}
        options={{
          headerShown: true,
          title: "filter",
        }}
      />
      <Stack.Screen
        name="AnnouncementsSingerFilterScreen"
        component={SingerFilterScreen}
        options={{
          headerShown: false,
          title: "filter",
        }}
      />
    </Stack.Navigator>
  );
}
