import { TextInput, Text, View, ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateStageStyle";
import Tag from "../../Components/TagComponents/Tag";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
export default function CreateStageScreen() {
  const [text, onChangeText] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { MediaPicker, image } = useMedia();
  const { LocationPicker, location } = useLocation();
  const { TagComponent, selectedTags } = Tag({});
  function submitPost() {
    setLoading(true);
    UploadPost({
      content: text,
      media: image,
      tag_all: selectedTags,
      type: "stage_post",
      location: location,
      price: price,
    });
    setLoading(false);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <MediaPicker />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something about your stage"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Set Price</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.priceInput}
          onChangeText={setPrice}
          placeholder="20$ per hour"
          value={price}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <LocationPicker />
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
