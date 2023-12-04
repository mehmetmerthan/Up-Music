import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchGroupScreen from "../../Screens/Home/SearchGroupScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
const MySearchGroupStack = createStackNavigator();

const SearchGroupStack = () => (
  <MySearchGroupStack.Navigator>
    <MySearchGroupStack.Screen
      name="SearchGroupScreen"
      component={SearchGroupScreen}
      options={{ headerShown: false }}
    />
    <MySearchGroupStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
    <MySearchGroupStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
  </MySearchGroupStack.Navigator>
);

export default SearchGroupStack;
