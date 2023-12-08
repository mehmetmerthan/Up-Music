import { TextInput, Text, View, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/TagComponents/Tag";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Divider, Button } from "@rneui/themed";
import UploadPost from "../../Utils/Uploads/uploadPost";

export default function CreatePostScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { MediaPicker, image } = useMedia();
  const { TagComponent, selectedTags } = Tag({});
  async function submitPost() {
    setLoading(true);
    await UploadPost({
      content: text,
      media: image,
      tag_all: selectedTags,
      type: "main_post",
    });
    setLoading(false);
  }
  return (
    <ScrollView>
      <View>
        <MediaPicker />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TagComponent />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Button
          title="Share"
          loading={isLoading}
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          titleStyle={{ color: "white" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          onPress={submitPost}
        />
      </View>
    </ScrollView>
  );
}
