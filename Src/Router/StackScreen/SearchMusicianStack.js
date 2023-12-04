import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchMusicianScreen from "../../Screens/Home/SearchMusicianScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
const MySearchMusicianStack = createStackNavigator();

const SearchMusicianStack = () => (
  <MySearchMusicianStack.Navigator>
    <MySearchMusicianStack.Screen
      name="SearchMusicianScreen"
      component={SearchMusicianScreen}
      options={{ headerShown: false }}
    />
    <MySearchMusicianStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
    <MySearchMusicianStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
  </MySearchMusicianStack.Navigator>
);

export default SearchMusicianStack;
