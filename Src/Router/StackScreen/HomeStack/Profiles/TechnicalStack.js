import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SoundEngineerScreen from "../../../../Screens/Home/Profiles/Technical/SoundEngineerScreen";
import TechnicalScreen from "../../../../Screens/Home/Profiles/Technical/TechnicalScreen";
import TechnicianScreen from "../../../../Screens/Home/Profiles/Technical/TechnicianScreen";
import SoundEngineerFilterScreen from "../../../../Screens/Filter/Profiles/Technical/SoundEngineerFilterScreen";
import TechnicalFilterScreen from "../../../../Screens/Filter/Profiles/Technical/TechnicalFilterScreen";
import TechnicianFilterScreen from "../../../../Screens/Filter/Profiles/Technical/TechnicianFilterScreen";
import ProfileHeaderRight from "../../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeaderRight";
const Stack = createStackNavigator();
export default function TechnicaltStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TechnicalScreen"
        component={TechnicalScreen}
        options={{
          headerShown: true,
          title: "Technical",
          headerRight: () => (
            <ProfileHeaderRight screenName="TechnicalFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="SoundEngineerScreen"
        component={SoundEngineerScreen}
        options={{
          headerShown: true,
          title: "Sound Engineer",
          headerRight: () => (
            <ProfileHeaderRight screenName="SoundEngineerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="TechnicianScreen"
        component={TechnicianScreen}
        options={{
          headerShown: true,
          title: "Technician",
          headerRight: () => (
            <ProfileHeaderRight screenName="TechnicianFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="SoundEngineerFilterScreen"
        component={SoundEngineerFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="TechnicalFilterScreen"
        component={TechnicalFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="TechnicianFilterScreen"
        component={TechnicianFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
