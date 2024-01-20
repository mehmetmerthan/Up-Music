import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Picker/MediaPickerStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
export default function useMedia() {
  const [image, setImage] = useState("");
  const [mediatype, setMediaType] = useState("");
  async function MediaPicker() {
    setImage("");
    setMediaType("");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    });
    if (!result.canceled) {
      setImage(result?.assets[0]?.uri);
      setMediaType(result?.assets[0]?.type);
    }
  }

  async function MediaPickerImage() {
    setImage("");
    setMediaType("");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    });
    if (!result.canceled) {
      setImage(result?.assets[0]?.uri);
      setMediaType("image");
    }
  }
  function MediaPickerImageComponent() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>Choose an image</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TouchableOpacity style={styles.mediaButton} onPress={MediaPickerImage}>
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
  function MediaPickerComponent() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>Choose an image or Video</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TouchableOpacity style={styles.mediaButton} onPress={MediaPicker}>
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
  return {
    MediaPicker,
    MediaPickerImageComponent,
    image,
    MediaPickerImage,
    MediaPickerComponent,
    mediatype,
  };
}
