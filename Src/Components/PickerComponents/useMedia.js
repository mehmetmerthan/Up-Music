import { SafeAreaView, Text } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Picker/MediaPickerStyle";
import { Divider, Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { useTranslation } from "react-i18next";
export default function useMedia() {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);
  async function MediaPickerImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [6, 5],
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(result?.assets[0]?.uri);
      }
    } catch (error) {
      console.log("pic issue", error);
    }
  }
  async function MediaPickerImageEvent() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
        <Text style={styles.header}>{t("chooseImage")}</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        {image ? (
          <Avatar
            size={200}
            source={{ uri: image }}
            containerStyle={{ alignSelf: "center", margin: 12 }}
            avatarStyle={{ borderRadius: 10 }}
          />
        ) : (
          <Avatar
            size={100}
            icon={{ name: "backup", type: "material", color: "#4a4a4a" }}
            containerStyle={{ alignSelf: "center", margin: 12 }}
            onPress={MediaPickerImage}
          />
        )}
      </SafeAreaView>
    );
  }
  function MediaPickerReset() {
    setImage(null);
  }

  return {
    MediaPickerImage,
    MediaPickerImageComponent,
    MediaPickerImageEvent,
    MediaPickerReset,
    image,
  };
}
