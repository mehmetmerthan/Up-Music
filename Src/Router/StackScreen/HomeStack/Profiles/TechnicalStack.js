import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SoundEngineerScreen from "../../../../Screens/Home/Profiles/Technical/SoundEngineerScreen";
import TechnicalScreen from "../../../../Screens/Home/Profiles/Technical/TechnicalScreen";
import TechnicianScreen from "../../../../Screens/Home/Profiles/Technical/TechnicianScreen";
import SoundEngineerFilterScreen from "../../../../Screens/Filter/Profiles/Technical/SoundEngineerFilterScreen";
import TechnicalFilterScreen from "../../../../Screens/Filter/Profiles/Technical/TechnicalFilterScreen";
import TechnicianFilterScreen from "../../../../Screens/Filter/Profiles/Technical/TechnicianFilterScreen";

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
        }}
      />
      <Stack.Screen
        name="SoundEngineerScreen"
        component={SoundEngineerScreen}
        options={{
          headerShown: true,
          title: "Sound Engineer",
        }}
      />
      <Stack.Screen
        name="TechnicianScreen"
        component={TechnicianScreen}
        options={{
          headerShown: true,
          title: "Technician",
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
