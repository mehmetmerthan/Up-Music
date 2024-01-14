import { React, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import useMedia from "./Components/PickerComponents/useMedia";
import { Button } from "@rneui/themed";

export default function Ex() {
  const { MediaPickerComponent, mediatype } = useMedia();
  function x() {
    console.log(mediatype);
  }
  return (
    <View style={styles.container}>
      <MediaPickerComponent />
      <Button title={"x"} onPress={x} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
