import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InstrumentalistScreen from "../../../../Screens/Home/Profiles/Performance/InstrumentalistScreen";
import PerformanceScreen from "../../../../Screens/Home/Profiles/Performance/PerformanceScreen";
import SingerScreen from "../../../../Screens/Home/Profiles/Performance/SingerScreen";
import InstrumentalistFilterScreen from "../../../../Screens/Filter/Profiles/Performance/InstrumentalistFilterScreen";
import PerformanceFilterScreen from "../../../../Screens/Filter/Profiles/Performance/PerformanceFilterScreen";
import SingerFilterScreen from "../../../../Screens/Filter/Profiles/Performance/SingerFilterScreen";
import ProfileHeaderRight from "../../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeaderRight";
const Stack = createStackNavigator();
export default function PerformanceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PerformanceScreen"
        component={PerformanceScreen}
        options={{
          headerShown: true,
          title: "Performance",
          headerRight: () => (
            <ProfileHeaderRight screenName="PerformanceFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="InstrumentalistScreen"
        component={InstrumentalistScreen}
        options={{
          headerShown: true,
          title: "Instrumentalist",
          headerRight: () => (
            <ProfileHeaderRight screenName="InstrumentalistFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="SingerScreen"
        component={SingerScreen}
        options={{
          headerShown: true,
          title: "Publicist",
          headerRight: () => (
            <ProfileHeaderRight screenName="SingerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="InstrumentalistFilterScreen"
        component={InstrumentalistFilterScreen}
        options={{
          headerShown: true,
          title: "filter",
        }}
      />
      <Stack.Screen
        name="PerformanceFilterScreen"
        component={PerformanceFilterScreen}
        options={{
          headerShown: true,
          title: "filter",
        }}
      />
      <Stack.Screen
        name="SingerFilterScreen"
        component={SingerFilterScreen}
        options={{
          headerShown: false,
          title: "filter",
        }}
      />
    </Stack.Navigator>
  );
}
