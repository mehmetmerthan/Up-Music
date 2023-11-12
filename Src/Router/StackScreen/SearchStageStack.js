import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchStageScreen from "../../Screens/Home/SearchStageScreen";

const MySearchStageStack = createStackNavigator();

const SearchStageStack = () => (
  <MySearchStageStack.Navigator>
    <MySearchStageStack.Screen
      name="SearchStageScreen"
      component={SearchStageScreen}
      options={{ headerShown: false }}
    />
  </MySearchStageStack.Navigator>
);

export default SearchStageStack;
