import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import styles from "../Styles/MediaPickerStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";

export default function MediaPicker() {
  const [image, setImage] = useState(null);
  async function picker() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  return (
    <SafeAreaView>
      <Text style={styles.header}>Choose an image or Video</Text>
      <Divider inset={true} insetType="middle" orientation="vertical" />
      <TouchableOpacity style={styles.mediaButton} onPress={picker}>
        <MaterialCommunityIcons
          name="file-image-plus-outline"
          size={100}
          color="black"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
