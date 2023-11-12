import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Octicons,
} from "@expo/vector-icons";
import HomeStack from "../StackScreen/HomeStack";
import EventStack from "../StackScreen/EventStack";
import SearchMusicianStack from "../StackScreen/SearchMusicianStack";
import SearchGroupStack from "../StackScreen/SearchGroupStack";
import SearchStageStack from "../StackScreen/SearchStageStack";
import SettingsStack from "../StackScreen/SettingsStack";
import SearchJobStack from "../StackScreen/SearchJobStack";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name="ios-home"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Home",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom:20
          },
          drawerLabelStyle:{
            fontSize:18
          }
        }}
      />
      <Drawer.Screen
        name="EventStack"
        component={EventStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="event"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Events",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom:20
          },
          drawerLabelStyle:{
            fontSize:18
          }
        }}
      />
      <Drawer.Screen
        name="SearchMusicianStack"
        component={SearchMusicianStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="account-music-outline"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Search Musician",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom:20
          },
          drawerLabelStyle:{
            fontSize:18
          }
        }}
      />
      <Drawer.Screen
        name="SearchGroupStack"
        component={SearchGroupStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <FontAwesome
              name="group"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Search Group",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom:20
          },
          drawerLabelStyle:{
            fontSize:18
          }
        }}
      />
      <Drawer.Screen
        name="SearchStageStack"
        component={SearchStageStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="place"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Search Stage",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom:20
          },
          drawerLabelStyle:{
            fontSize:18
          }
        }}
      />
      <Drawer.Screen
        name="SearchJobStack"
        component={SearchJobStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <FontAwesome5
              name="search-dollar"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Search Job",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom:20
          },
          drawerLabelStyle:{
            fontSize:18
          }
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name="settings-outline"
              color={focused ? color : "#ccc"}
              size={size}
            />
          ),
          title: "Settings",
          drawerItemStyle: {
            marginTop: 300,
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
          },
        }}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{
          drawerIcon: ({ size }) => (
            <Octicons name="sign-out" color="#FF5733" size={size} />
          ),
          title: "Sign Out",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#FF5733",
          },
          drawerLabelStyle:{
            color:"#FF5733"
          }
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

function SignOut() {}
