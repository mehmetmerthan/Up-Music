import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from '@rneui/themed';
const CommentForm = () => {
  const [text, onChangeText] = useState("");
  const handleSubmit = () => {
    console.log("yorum gönderildi");
  };
  return (
    <View>
      <Input
        clearButtonMode="always"
        inputContainerStyle={styles.input}
        onChangeText={onChangeText}
        placeholder="Comment here..."
        value={text}
      />
      <Button
        size="sm"
        buttonStyle={{
          backgroundColor: 'rgba(90, 154, 230, 1)',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          alignSelf: "center",
        }}
      >
        Send
      </Button>
    </View>
  );
};

export default CommentForm;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "center",
  },
});