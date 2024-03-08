import { View, StyleSheet } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import * as Notifications from "expo-notifications";
export default function Ex() {
  async function onPress() {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        return;
      }
    }
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "message title",
        body: "message body",
        data: { data: "data" },
      },
      trigger: null,
    });
  }
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  return (
    <View style={styles.container}>
      <Button title={"Press"} onPress={onPress} buttonStyle={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
});
