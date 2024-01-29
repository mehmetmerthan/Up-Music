import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateScreen from "../../Screens/Create/CreateScreen";
//import CreatePostScreen from "../../Screens/Create/CreatePostScreen";
import CreateEventScreen from "../../Screens/Create/CreateEventScreen";
import CreateGroupScreen from "../../Screens/Create/CreateGroupScreen";
//import CreateProfScreen from "../../Screens/Create/CreateProfScreen";
import CreateStageScreen from "../../Screens/Create/CreateStageScreen";
import CreateMusicianScreen from "../../Screens/Create/CreateMusicianScreen";
//import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
const MyCreateStack = createStackNavigator();
const CreateStack = () => (
  <MyCreateStack.Navigator>
    <MyCreateStack.Screen
      name="CreateScreen"
      component={CreateScreen}
      options={{
        title: "Create",
      }}
    />
    {/* <MyCreateStack.Screen
      name="CreatePostScreen"
      component={CreatePostScreen}
      options={{
        title: "Create Post",
      }}
    /> */}
    <MyCreateStack.Screen
      name="CreateEventScreen"
      component={CreateEventScreen}
      options={{
        title: "Create Event",
      }}
    />
    <MyCreateStack.Screen
      name="CreateGroupScreen"
      component={CreateGroupScreen}
      options={{
        title: "Create Group",
      }}
    />
    {/* <MyCreateStack.Screen
      name="CreateProfScreen"
      component={CreateProfScreen}
      options={{
        title: "Create Job",
      }}
    /> */}
    <MyCreateStack.Screen
      name="CreateStageScreen"
      component={CreateStageScreen}
      options={{
        title: "Create Stage",
      }}
    />
    <MyCreateStack.Screen
      name="CreateMusicianScreen"
      component={CreateMusicianScreen}
      options={{
        title: "Create Musician",
      }}
    />
  </MyCreateStack.Navigator>
);

export default CreateStack;
