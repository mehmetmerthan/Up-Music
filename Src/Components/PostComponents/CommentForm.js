import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const CommentForm = () => {
  const [commentText, setCommentText] = useState("");
  const handleSubmit = () => {
    console.log("yorum gönderildi");
  };
  return (
    <View>
      <TextInput
        placeholder="Yorumunuzu buraya yazın"
        value={commentText}
        onChangeText={setCommentText}
      />
      <Button title="Yorum Yap" onPress={handleSubmit()} />
    </View>
  );
};

export default CommentForm;