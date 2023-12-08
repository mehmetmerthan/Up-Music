import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/MediaPickerStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
export default function useMedia() {
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
  async function myImagepicker() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  function MyImagePicker() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>Choose an image</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TouchableOpacity style={styles.mediaButton} onPress={myImagepicker}>
          <MaterialCommunityIcons
            name="file-image-plus-outline"
            size={100}
            color="black"
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  function MediaPicker() {
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
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </SafeAreaView>
    );
  }
  return { MediaPicker, MyImagePicker, image };
}
