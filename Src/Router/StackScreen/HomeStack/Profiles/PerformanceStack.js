import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PerformanceScreen from "../../../../Screens/Home/Profiles/Performance/PerformanceScreen";
import SingerScreen from "../../../../Screens/Home/Profiles/Performance/SingerScreen";
import PerformanceFilterScreen from "../../../../Screens/Filter/Profiles/Performance/PerformanceFilterScreen";
import SingerFilterScreen from "../../../../Screens/Filter/Profiles/Performance/SingerFilterScreen";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import DjScreen from "../../../../Screens/Home/Profiles/Performance/DjScreen";
import DjFilterScreen from "../../../../Screens/Filter/Profiles/Performance/DjFilterScreen";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
export default function PerformanceStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PerformanceScreen"
        component={PerformanceScreen}
        options={{
          headerShown: true,
          title: t("performance"),
          headerRight: () => (
            <HeaderRight screenName="PerformanceFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="SingerScreen"
        component={SingerScreen}
        options={{
          headerShown: true,
          title: t("publicist"),
          headerRight: () => <HeaderRight screenName="SingerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="DjScreen"
        component={DjScreen}
        options={{
          headerShown: true,
          title: t("dj"),
          headerRight: () => <HeaderRight screenName="DjFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="DjFilterScreen"
        component={DjFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="PerformanceFilterScreen"
        component={PerformanceFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="SingerFilterScreen"
        component={SingerFilterScreen}
        options={{
          headerShown: false,
          title: t("filter"),
        }}
      />
    </Stack.Navigator>
  );
}
