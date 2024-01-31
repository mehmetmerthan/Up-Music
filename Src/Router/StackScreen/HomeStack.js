import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
import AnnouncementsScreen from "../../Screens/Home/Announcements/AnnouncementsScreen";
import ProfilesScreen from "../../Screens/Home/Profiles/ProfilesScreen";
import StagesScreen from "../../Screens/Home/StagesScreen";
import EventsScreen from "../../Screens/Home/EventsScreen";
import AnnouncementsFilterScreen from "../../Screens/Filter/AnnouncementsFilterScreen";
import MusicianSearchScreen from "../../Screens/Home/Announcements/MusicianSearchScreen";
import GroupSearchScreen from "../../Screens/Home/Announcements/GroupSearchScreen";
import GroupSearchFilterScreen from "../../Screens/Filter/GroupSearchFilterScreen";
import MusicianSearchFilterScreen from "../../Screens/Filter/MusicianSearchFilterScreen";
import EventsFilterScreen from "../../Screens/Filter/EventsFilterScreen";
import StagesFilterScreen from "../../Screens/Filter/StagesFilterScreen";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const MyHomeStack = createStackNavigator();
const HomeStack = () => {
  return (
    <MyHomeStack.Navigator>
      <MyHomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: "Home",
        }}
      />
      <MyHomeStack.Screen
        name="AnnouncementsScreen"
        component={AnnouncementsScreen}
        options={{
          headerShown: true,
          title: "Announcements",
          headerRight: headerRightAnnouncementsScreen,
        }}
      />
      <MyHomeStack.Screen
        name="MusicianSearchScreen"
        component={MusicianSearchScreen}
        options={{
          headerShown: true,
          title: "Musician Search",
          headerRight: headerRightMusicianSearchScreen,
        }}
      />
      <MyHomeStack.Screen
        name="GroupSearchScreen"
        component={GroupSearchScreen}
        options={{
          headerShown: true,
          title: "Group Search",
          headerRight: headerRightGroupSearchScreen,
        }}
      />
      <MyHomeStack.Screen
        name="ProfilesScreen"
        component={ProfilesScreen}
        options={{
          headerShown: true,
          title: "Profiles",
        }}
      />
      <MyHomeStack.Screen
        name="StagesScreen"
        component={StagesScreen}
        options={{
          headerShown: true,
          title: "Stages",
          headerRight: headerRightStagesScreen,
        }}
      />
      <MyHomeStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: true,
          title: "Events",
          headerRight: headerRightEventsScreen,
        }}
      />
      <MyHomeStack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
      <MyHomeStack.Screen
        name="MessageDetailScreen"
        component={MessageDetailScreen}
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "white",
        }}
      />
      <MyHomeStack.Screen
        name="AnnouncementsFilterScreen"
        component={AnnouncementsFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <MyHomeStack.Screen
        name="GroupSearchFilterScreen"
        component={GroupSearchFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <MyHomeStack.Screen
        name="MusicianSearchFilterScreen"
        component={MusicianSearchFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <MyHomeStack.Screen
        name="EventsFilterScreen"
        component={EventsFilterScreen}
        options={{
          title: "Filter",
        }}
      />
      <MyHomeStack.Screen
        name="StagesFilterScreen"
        component={StagesFilterScreen}
        options={{
          title: "Filter",
        }}
      />
    </MyHomeStack.Navigator>
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

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
});
