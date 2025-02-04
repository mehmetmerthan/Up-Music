import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateScreen from "../../Screens/Create/CreateScreen";
import CreateEventScreen from "../../Screens/Create/CreateEventScreen";
import CreateMusicianForBandScreen from "../../Screens/Create/CreateMusicianForBandScreen";
import CreateStageScreen from "../../Screens/Create/CreateStageScreen";
import CreateBandForMusicianScreen from "../../Screens/Create/CreateBandForMusicianScreen";
import CreateMusicianForCollaborateScreen from "../../Screens/Create/CreateMusicianForCollaborateScreen";
import CreateVisualArtistScreen from "../../Screens/Create/CreateVisualArtistScreen";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();
const CreateStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          title: t("create"),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="CreateEventScreen"
        component={CreateEventScreen}
        options={{
          title: t("create"),
        }}
      />
      <Stack.Screen
        name="CreateBandForMusicianScreen"
        component={CreateBandForMusicianScreen}
        options={{
          title: t("create"),
        }}
      />
      <Stack.Screen
        name="CreateMusicianForBandScreen"
        component={CreateMusicianForBandScreen}
        options={{
          title: t("create"),
        }}
      />
      <Stack.Screen
        name="CreateMusicianForCollaborateScreen"
        component={CreateMusicianForCollaborateScreen}
        options={{
          title: t("create"),
        }}
      />
      <Stack.Screen
        name="CreateStageScreen"
        component={CreateStageScreen}
        options={{
          title: t("create"),
        }}
      />
      <Stack.Screen
        name="CreateVisualArtistScreen"
        component={CreateVisualArtistScreen}
        options={{
          title: t("create"),
        }}
      />
    </Stack.Navigator>
  );
};

export default CreateStack;
