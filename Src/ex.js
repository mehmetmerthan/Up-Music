import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React, { useState } from "react";
export default function ex() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
