import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/Home/HomeScreen";
import UserDetailScreen from "../../Screens/UserDetailScreen";
import MessageDetailScreen from "../../Screens/Message/MessageDetailScreen";
import AnnouncementsScreen from "../../Screens/Home/AnnouncementsScreen";
import ProfilesScreen from "../../Screens/Home/ProfilesScreen";
import StagesScreen from "../../Screens/Home/StagesScreen";
import EventsScreen from "../../Screens/Home/EventsScreen";
import FilterScreen from "../../Screens/FilterScreen";
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
          headerRight: headerRight,
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
        }}
      />
      <MyHomeStack.Screen
        name="EventsScreen"
        component={EventsScreen}
        options={{
          headerShown: true,
          title: "Events",
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
        name="FilterScreen"
        component={FilterScreen}
        options={{
          title: "Filter",
        }}
      />
    </MyHomeStack.Navigator>
  );
};

export default HomeStack;

function headerRight() {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate("FilterScreen");
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
