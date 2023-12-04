import { ReactComponentElement, useState } from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import HomeStack from "../StackScreen/HomeStack";
import EventStack from "../StackScreen/EventStack";
import SearchMusicianStack from "../StackScreen/SearchMusicianStack";
import SearchGroupStack from "../StackScreen/SearchGroupStack";
import SearchStageStack from "../StackScreen/SearchStageStack";
import SettingsStack from "../StackScreen/SettingsStack";
import SearchProfStack from "../StackScreen/SearchProfStack";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Image
              source={require("../../../assets/home.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          title: "Home",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          },
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Drawer.Screen
        name="EventStack"
        component={EventStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Image
              source={require("../../../assets/event.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          title: "Events",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          },
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Drawer.Screen
        name="SearchMusicianStack"
        component={SearchMusicianStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Image
              source={require("../../../assets/seacrh-musician.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          title: "Search Musician",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          },
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Drawer.Screen
        name="SearchGroupStack"
        component={SearchGroupStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Image
              source={require("../../../assets/seach_group.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          title: "Search Group",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          },
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Drawer.Screen
        name="SearchStageStack"
        component={SearchStageStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Image
              source={require("../../../assets/seacrh_stage.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          title: "Search Stage",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          },
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}
      />
      <Drawer.Screen
        name="SearchProfStack"
        component={SearchProfStack}
        options={{
          drawerIcon: ({ focused, size, color }) => (
            <Image
              source={require("../../../assets/search-job.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          title: "Search Prof",
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderRadius: 0,
            borderBottomColor: "#ccc",
            marginBottom: 20,
          },
          drawerLabelStyle: {
            fontSize: 18,
          },
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
          drawerLabelStyle: {
            color: "#FF5733",
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

function SignOut() { }
