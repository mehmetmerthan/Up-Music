import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchStageScreen from "../../Screens/Home/SearchStageScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
const MySearchStageStack = createStackNavigator();

const SearchStageStack = () => (
  <MySearchStageStack.Navigator>
    <MySearchStageStack.Screen
      name="SearchStageScreen"
      component={SearchStageScreen}
      options={{ headerShown: false }}
    />
    <MySearchStageStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
    <MySearchStageStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
  </MySearchStageStack.Navigator>
);

export default SearchStageStack;
