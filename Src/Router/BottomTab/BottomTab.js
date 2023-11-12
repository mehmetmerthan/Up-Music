import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ExpoloreStackScreen from "../StackScreen/ExploreStack";
import CreateStackScreen from "../StackScreen/CreateStack";
import NotificationStackScreen from "../StackScreen/NotificationStack";
import ProfileStackScreen from "../StackScreen/ProfileStack";
import DrawerNavigator from "../Drawer/DrawerNavigator";
const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="DrawerNavigator"
      component={DrawerNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExpoloreStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="explore" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Create"
      component={CreateStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="create-outline" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="notifications-circle-outline"
            color={color}
            size={size}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
