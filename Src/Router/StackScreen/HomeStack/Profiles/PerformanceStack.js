import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InstrumentalistScreen from "../../../../Screens/Home/Profiles/Performance/InstrumentalistScreen";
import PerformanceScreen from "../../../../Screens/Home/Profiles/Performance/PerformanceScreen";
import SingerScreen from "../../../../Screens/Home/Profiles/Performance/SingerScreen";
import InstrumentalistFilterScreen from "../../../../Screens/Filter/Profiles/Performance/InstrumentalistFilterScreen";
import PerformanceFilterScreen from "../../../../Screens/Filter/Profiles/Performance/PerformanceFilterScreen";
import SingerFilterScreen from "../../../../Screens/Filter/Profiles/Performance/SingerFilterScreen";

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
        }}
      />
      <Stack.Screen
        name="InstrumentalistScreen"
        component={InstrumentalistScreen}
        options={{
          headerShown: true,
          title: "Instrumentalist",
        }}
      />
      <Stack.Screen
        name="SingerScreen"
        component={SingerScreen}
        options={{
          headerShown: true,
          title: "Publicist",
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
