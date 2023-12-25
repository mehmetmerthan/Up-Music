import { TextInput, Text, View, ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateProfStyle";
import Tag from "../../Components/TagComponents/Tag";
import { Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
export default function CreateProfScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { LocationPicker, location } = useLocation();
  const { TagComponent, selectedTags } = Tag({});
  function submitPost() {
    setLoading(true);
    UploadPost({
      content: text,
      tag_all: selectedTags,
      type: "prof_post",
      location: location,
    });
    setLoading(false);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <LocationPicker />
        <TagComponent />
        <Divider orientation="vertical" />
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
