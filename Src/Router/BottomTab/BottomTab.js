import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import MessageStack from "../StackScreen/MessageStack";
import CreateStackScreen from "../StackScreen/CreateStack";
import NotificationStackScreen from "../StackScreen/NotificationStack";
import ProfileStackScreen from "../StackScreen/ProfileStack";
import DrawerNavigator from "../Drawer/DrawerNavigator";
const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={DrawerNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Message"
      component={MessageStack}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="message" color={color} size={size} />
        ),
        headerShown: false,
        tabBarBadge: 3,
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
        tabBarBadge: 5,
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
