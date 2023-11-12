import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchMusicianScreen from "../../Screens/Home/SearchMusicianScreen";

const MySearchMusicianStack = createStackNavigator();

const SearchMusicianStack = () => (
  <MySearchMusicianStack.Navigator>
    <MySearchMusicianStack.Screen
      name="SearchMusicianScreen"
      component={SearchMusicianScreen}
      options={{ headerShown: false }}
    />
  </MySearchMusicianStack.Navigator>
);

export default SearchMusicianStack;
