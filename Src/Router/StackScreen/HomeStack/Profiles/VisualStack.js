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
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
export default function VisualStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VisualScreen"
        component={VisualScreen}
        options={{
          headerShown: true,
          title: t("visual"),
          headerRight: () => <HeaderRight screenName="VisualFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="DirectorScreen"
        component={DirectorScreen}
        options={{
          headerShown: true,
          title: t("director"),
          headerRight: () => <HeaderRight screenName="DirectorFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="EditorScreen"
        component={EditorScreen}
        options={{
          headerShown: true,
          title: t("editor"),
          headerRight: () => <HeaderRight screenName="EditorFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="GraphicerScreen"
        component={GraphicerScreen}
        options={{
          headerShown: true,
          title: t("graphicer"),
          headerRight: () => <HeaderRight screenName="GraphicerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="PhotographerScreen"
        component={PhotographerScreen}
        options={{
          headerShown: true,
          title: t("photographer"),
          headerRight: () => (
            <HeaderRight screenName="PhotographerFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="VideographyScreen"
        component={VideographyScreen}
        options={{
          headerShown: true,
          title: t("videography"),
          headerRight: () => (
            <HeaderRight screenName="VideographyFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="DirectorFilterScreen"
        component={DirectorFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="EditorFilterScreen"
        component={EditorFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="GraphicerFilterScreen"
        component={GraphicerFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="PhotographerFilterScreen"
        component={PhotographerFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="VideographyFilterScreen"
        component={VideographyFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
      <Stack.Screen
        name="VisualFilterScreen"
        component={VisualFilterScreen}
        options={{
          headerShown: true,
          title: t("filter"),
        }}
      />
    </Stack.Navigator>
  );
}
