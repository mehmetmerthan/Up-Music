import ProfilesScreen from "../../../../Screens/Home/Profiles/ProfilesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilesFilterScreen from "../../../../Screens/Filter/Profiles/ProfilesFilterScreen";
import PerformanceStack from "./PerformanceStack";
import ProducersStack from "./ProducersStack";
import VisualStack from "./VisualStack";
import React from "react";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import UserDetailScreen from "../../../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../../../Screens/Message/MessageDetailScreen";
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
            <HeaderRight screenName="ProfilesFilterScreen" />
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
