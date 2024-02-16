import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateScreen from "../../Screens/Create/CreateScreen";
import CreateEventScreen from "../../Screens/Create/CreateEventScreen";
import CreateMusicianForBandScreen from "../../Screens/Create/CreateMusicianForBandScreen";
import CreateMusicianForStageScreen from "../../Screens/Create/CreateMusicianForStageScreen";
import CreateBandForMusicianScreen from "../../Screens/Create/CreateBandForMusicianScreen";
import CreateMusicianForCollaborateScreen from "../../Screens/Create/CreateMusicianForCollaborateScreen";
import CreateOtherScreen from "../../Screens/Create/CreateOtherScreen";
const Stack = createStackNavigator();
const CreateStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="CreateScreen"
      component={CreateScreen}
      options={{
        title: "Create",
      }}
    />
    <Stack.Screen
      name="CreateEventScreen"
      component={CreateEventScreen}
      options={{
        title: "Create",
      }}
    />
    <Stack.Screen
      name="CreateBandForMusicianScreen"
      component={CreateBandForMusicianScreen}
      options={{
        title: "Create",
      }}
    />
    <Stack.Screen
      name="CreateMusicianForBandScreen"
      component={CreateMusicianForBandScreen}
      options={{
        title: "Create",
      }}
    />
    <Stack.Screen
      name="CreateMusicianForCollaborateScreen"
      component={CreateMusicianForCollaborateScreen}
      options={{
        title: "Create",
      }}
    />
    <Stack.Screen
      name="CreateMusicianForStageScreen"
      component={CreateMusicianForStageScreen}
      options={{
        title: "Create Stage",
      }}
    />
    <Stack.Screen
      name="CreateOtherScreen"
      component={CreateOtherScreen}
      options={{
        title: "Create",
      }}
    />
  </Stack.Navigator>
);

export default CreateStack;
