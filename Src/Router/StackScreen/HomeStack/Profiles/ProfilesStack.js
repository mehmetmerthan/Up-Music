import ProfilesScreen from "../../../../Screens/Home/Profiles/ProfilesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilesFilterScreen from "../../../../Screens/Filter/Profiles/ProfilesFilterScreen";
import ManagementStack from "./ManagementStack";
import PerformanceStack from "./PerformanceStack";
import ProducersStack from "./ProducersStack";
import TechnicalStack from "./TechnicalStack";
import VisualStack from "./VisualStack";
import React from "react";
import ProfileHeaderRight from "../../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeaderRight";
const Stack = createStackNavigator();
export default function ProfilesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilesScreen"
        component={ProfilesScreen}
        options={{
          headerShown: true,
          title: "Profiles",
          headerRight: () => (
            <ProfileHeaderRight screenName="ProfilesFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="ManagementStack"
        component={ManagementStack}
        options={{
          headerShown: false,
          title: "",
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
        name="TechnicalStack"
        component={TechnicalStack}
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
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
