import { React, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { Storage } from "aws-amplify";
function Ex() {
  const [image, setImage] = useState(null);
  async function imagePicker() {
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
  async function upload() {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const key = `media/6:45`;
      const res = await Storage.put(key, blob);
      console.log("res", res);
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  }
  return (
    <View style={styles.container}>
      <Button
        onPress={imagePicker}
        title={"pick image"}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        onPress={upload}
        title={"upload"}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}

export default Ex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 200,
    margin: 20,
  },
});
