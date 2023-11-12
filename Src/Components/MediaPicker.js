import { SafeAreaView, Text,TouchableOpacity } from "react-native";
import React from "react";
import styles from "../Styles/Create/CreatePostStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function MediaPicker() {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Choose an image or Video</Text>
      <TouchableOpacity style={styles.mediaButton}>
        <MaterialCommunityIcons
          name="file-image-plus-outline"
          size={100}
          color="black"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
