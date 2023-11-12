import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../../Screens/Explore/ExploreScreen";
import AnnouncementDetailScreen from "../../Screens/Explore/AnnouncementDetailScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";

const MyExploreStack = createStackNavigator();
const ExploreStackS = () => (
  <MyExploreStack.Navigator>
    <MyExploreStack.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{
        title: "Explore" 
      }}
    />
    <MyExploreStack.Screen
      name="AnnouncementDetailScreen"
      component={AnnouncementDetailScreen}
      options={{ headerShown: false }}
    />
    <MyExploreStack.Screen
      name="UserDetailScreen"
      component={UserDetailScreen}
      options={{ headerShown: false }}
    />
  </MyExploreStack.Navigator>
);

export default ExploreStackS;