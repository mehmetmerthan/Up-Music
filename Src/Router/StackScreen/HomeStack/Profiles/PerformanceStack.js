import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import InstrumentalistScreen from "../../../../Screens/Home/Profiles/Performance/InstrumentalistScreen";
import PerformanceScreen from "../../../../Screens/Home/Profiles/Performance/PerformanceScreen";
import SingerScreen from "../../../../Screens/Home/Profiles/Performance/SingerScreen";
import InstrumentalistFilterScreen from "../../../../Screens/Filter/Profiles/Performance/InstrumentalistFilterScreen";
import PerformanceFilterScreen from "../../../../Screens/Filter/Profiles/Performance/PerformanceFilterScreen";
import SingerFilterScreen from "../../../../Screens/Filter/Profiles/Performance/SingerFilterScreen";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import DjScreen from "../../../../Screens/Home/Profiles/Performance/DjScreen";
import DjFilterScreen from "../../../../Screens/Filter/Profiles/Performance/DjFilterScreen";
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
            <HeaderRight screenName="PerformanceFilterScreen" />
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
            <HeaderRight screenName="InstrumentalistFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="SingerScreen"
        component={SingerScreen}
        options={{
          headerShown: true,
          title: "Publicist",
          headerRight: () => <HeaderRight screenName="SingerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="DjScreen"
        component={DjScreen}
        options={{
          headerShown: true,
          title: "Dj",
          headerRight: () => <HeaderRight screenName="DjFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="DjFilterScreen"
        component={DjFilterScreen}
        options={{
          headerShown: true,
          title: "filter",
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
