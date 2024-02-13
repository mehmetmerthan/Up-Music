import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../Screens/Home/HomeScreen";
import StagesScreen from "../../../Screens/Home/StagesScreen";
import EventsScreen from "../../../Screens/Home/EventsScreen";
import EventsFilterScreen from "../../../Screens/Filter/EventsFilterScreen";
import StagesFilterScreen from "../../../Screens/Filter/StagesFilterScreen";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AnnouncementStack from "./AnnouncementStack";
import ProfilesStack from "./Profiles/ProfilesStack";
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Home",
        }}
      />
      <Stack.Screen
        name="AnnouncementsStack"
        component={AnnouncementStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="StagesScreen"
        component={StagesScreen}
        options={{
          headerShown: true,
          title: "Stages",
          headerRight: headerRightStagesScreen,
        }}
      />
      <Stack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: true,
          title: "Events",
          headerRight: headerRightEventsScreen,
        }}
      />
      <Stack.Screen
        name="ProfilesStack"
        component={ProfilesStack}
        options={{
          headerShown: false,
          title: "",
        }}
      />
      <Stack.Screen
        name="EventsFilterScreen"
        component={EventsFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <Stack.Screen
        name="StagesFilterScreen"
        component={StagesFilterScreen}
        options={{
          title: "Filter",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

function headerRightAnnouncementsScreen() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("AnnouncementsFilterScreen");
        }
      }}
    />
  );
}
function headerRightGroupSearchScreen() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("GroupSearchFilterScreen");
        }
      }}
    />
  );
}
function headerRightMusicianSearchScreen() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("MusicianSearchFilterScreen");
        }
      }}
    />
  );
}

function headerRightEventsScreen() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("EventsFilterScreen");
        }
      }}
    />
  );
}

function headerRightStagesScreen() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("StagesFilterScreen");
        }
      }}
    />
  );
}

function headerRightProfilesScreen() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("ProfilesFilterScreen");
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
});
