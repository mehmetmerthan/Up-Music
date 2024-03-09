import ProfilesScreen from "../../../../Screens/Home/Profiles/ProfilesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilesFilterScreen from "../../../../Screens/Filter/Profiles/ProfilesFilterScreen";
import PerformanceStack from "./PerformanceStack";
import ProducersStack from "./ProducersStack";
import VisualStack from "./VisualStack";
import React from "react";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import InstrumentalistScreen from "../../../../Screens/Home/Profiles/InstrumentalistScreen";
import InstrumentalistFilterScreen from "../../../../Screens/Filter/Profiles/InstrumentalistFilterScreen";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
export default function ProfilesStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilesScreen"
        component={ProfilesScreen}
        options={{
          headerShown: true,
          title: t("profiles"),
          headerRight: () => <HeaderRight screenName="ProfilesFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="InstrumentalistScreen"
        component={InstrumentalistScreen}
        options={{
          headerShown: true,
          title: t("instrumentalist"),
          headerRight: () => (
            <HeaderRight screenName="InstrumentalistFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="PerformanceStack"
        component={PerformanceStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="ProducersStack"
        component={ProducersStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="VisualStack"
        component={VisualStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="ProfilesFilterScreen"
        component={ProfilesFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="InstrumentalistFilterScreen"
        component={InstrumentalistFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
    </Stack.Navigator>
  );
}
