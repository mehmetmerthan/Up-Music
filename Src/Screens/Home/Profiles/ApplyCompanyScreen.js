import { View, Text, TextInput, StyleSheet } from "react-native";
import { React, useState } from "react";

export default function ApplyCompanyScreen() {
  const [text, onChangeText] = useState("");
  const {} = route?.params || {};
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.subText}> Artist name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "space-between",
  },
  subText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
