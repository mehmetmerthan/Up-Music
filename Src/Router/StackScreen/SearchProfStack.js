import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchProfcreen from "../../Screens/Home/SearchProfScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
const MySearchProfStack = createStackNavigator();

const SearchProfStack = () => (
  <MySearchProfStack.Navigator>
    <MySearchProfStack.Screen
      name="SearchProfScreen"
      component={SearchProfcreen}
      options={{ headerShown: false }}
    />
    <MySearchProfStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
    <MySearchProfStack.Screen
      name="MessageDetailScreen"
      component={MessageDetailScreen}
      options={{
        headerTransparent: true,
        title: "",
        headerTintColor: "white",
      }}
    />
  </MySearchProfStack.Navigator>
);

export default SearchProfStack;
