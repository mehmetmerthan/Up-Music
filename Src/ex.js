import React from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { Skeleton } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
const Ex = () => {

  return (
    <Skeleton
      circle
      width={40}
      height={40}
      LinearGradientComponent={LinearGradient}
      animation="wave"
    />
  );
};

export default Ex;

const styles = StyleSheet.create({
  container: {
    padding: 100,
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
  },
});
