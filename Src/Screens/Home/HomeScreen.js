import { View,ScrollView } from "react-native";
import React from "react";
import Post from "../../Components/PostComponents/Post";
export default function HomeScreen() {
  return (
    <ScrollView>
      <Post />
    </ScrollView>
  );
}
