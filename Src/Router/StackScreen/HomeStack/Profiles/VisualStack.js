import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DirectorScreen from "../../../../Screens/Home/Profiles/Visual/DirectorScreen";
import EditorScreen from "../../../../Screens/Home/Profiles/Visual/EditorScreen";
import GraphicerScreen from "../../../../Screens/Home/Profiles/Visual/GraphicerScreen";
import PhotographerScreen from "../../../../Screens/Home/Profiles/Visual/PhotographerScreen";
import VideographyScreen from "../../../../Screens/Home/Profiles/Visual/VideographyScreen";
import VisualScreen from "../../../../Screens/Home/Profiles/Visual/VisualScreen";
import DirectorFilterScreen from "../../../../Screens/Filter/Profiles/Visual/DirectorFilterScreen";
import EditorFilterScreen from "../../../../Screens/Filter/Profiles/Visual/EditorFilterScreen";
import GraphicerFilterScreen from "../../../../Screens/Filter/Profiles/Visual/GraphicerFilterScreen";
import PhotographerFilterScreen from "../../../../Screens/Filter/Profiles/Visual/PhotographerFilterScreen";
import VideographyFilterScreen from "../../../../Screens/Filter/Profiles/Visual/VideographyFilterScreen";
import VisualFilterScreen from "../../../../Screens/Filter/Profiles/Visual/VisualFilterScreen";
import ProfileHeaderRight from "../../../../Components/PostComponents/Headers/ProfilesHeaders/ProfilesHeaderRight";
const Stack = createStackNavigator();
export default function VisualStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VisualScreen"
        component={VisualScreen}
        options={{
          headerShown: true,
          title: "Visual",
          headerRight: () => (
            <ProfileHeaderRight screenName="VisualFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="DirectorScreen"
        component={DirectorScreen}
        options={{
          headerShown: true,
          title: "Director",
          headerRight: () => (
            <ProfileHeaderRight screenName="DirectorFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="EditorScreen"
        component={EditorScreen}
        options={{
          headerShown: true,
          title: "Editor",
          headerRight: () => (
            <ProfileHeaderRight screenName="EditorFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="GraphicerScreen"
        component={GraphicerScreen}
        options={{
          headerShown: true,
          title: "Graphicer",
          headerRight: () => (
            <ProfileHeaderRight screenName="GraphicerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="PhotographerScreen"
        component={PhotographerScreen}
        options={{
          headerShown: true,
          title: "Photographer",
          headerRight: () => (
            <ProfileHeaderRight screenName="PhotographerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="VideographyScreen"
        component={VideographyScreen}
        options={{
          headerShown: true,
          title: "Videography",
          headerRight: () => (
            <ProfileHeaderRight screenName="VideographyFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="DirectorFilterScreen"
        component={DirectorFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="EditorFilterScreen"
        component={EditorFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="GraphicerFilterScreen"
        component={GraphicerFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="PhotographerFilterScreen"
        component={PhotographerFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="VideographyFilterScreen"
        component={VideographyFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="VisualFilterScreen"
        component={VisualFilterScreen}
        options={{
          headerShown: true,
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
}
