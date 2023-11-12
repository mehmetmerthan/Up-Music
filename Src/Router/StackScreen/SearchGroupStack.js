import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchGroupScreen from "../../Screens/Home/SearchGroupScreen";

const MySearchGroupStack = createStackNavigator();

const SearchGroupStack = () => (
  <MySearchGroupStack.Navigator>
    <MySearchGroupStack.Screen
      name="SearchGroupScreen"
      component={SearchGroupScreen}
      options={{ headerShown: false }}
    />
  </MySearchGroupStack.Navigator>
);

export default SearchGroupStack;
