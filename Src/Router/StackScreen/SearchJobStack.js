import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchJobScreen from "../../Screens/Home/SearchJobScreen";

const MySearchJobStack = createStackNavigator();

const SearchJobStack = () => (
  <MySearchJobStack.Navigator>
    <MySearchJobStack.Screen
      name="SearchStageScreen"
      component={SearchJobScreen}
      options={{ headerShown: false }}
    />
  </MySearchJobStack.Navigator>
);

export default SearchJobStack;
