import { SafeAreaView, Text, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Picker/MediaPickerStyle";
import { Divider, Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function useMedia() {
  const [image, setImage] = useState(null);
  async function MediaPickerImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(result?.assets[0]?.uri);
      }
    } catch (error) {
      console.log("pic issue", error);
    }
  }
  function MediaPickerImageComponent() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>Choose an image</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TouchableOpacity onPress={MediaPickerImage} style={styles.icon}>
          <MaterialCommunityIcons
            name="file-image-plus-outline"
            size={48}
            color="black"
          />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </SafeAreaView>
    );
  }
  function MediaPickerAvatarComponent() {
    return (
      <SafeAreaView>
        <Text style={styles.header}>Choose an image</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        {image ? (
          <Avatar
            size={100}
            rounded
            source={{ uri: image }}
            containerStyle={{ alignSelf: "center", margin: 12 }}
          />
        ) : (
          <Avatar
            size={100}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            containerStyle={{ alignSelf: "center", margin: 12 }}
            onPress={MediaPickerImage}
          />
        )}
      </SafeAreaView>
    );
  }

  return {
    MediaPickerImage,
    MediaPickerAvatarComponent,
    MediaPickerImageComponent,
    image,
  };
}
