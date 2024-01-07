import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/TagComponents/Tag";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Divider, Button } from "@rneui/themed";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData } from "../../../data/TagData";
export default function CreatePostScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const { MediaPickerComponent, image } = useMedia();
  async function submitPost() {
    setLoading(true);
    await UploadPost({
      content: text,
      media: image,
      tag_styles: selectedTags,
      type: "main_post",
    });
    setLoading(false);
  }
  function renderItem() {
    return (
      <View>
        <MediaPickerComponent />
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
        <Tag
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          tagData={styleTagData}
        />
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
    );
  }
  return (
    <FlatList
      data={[1]}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      keyboardShouldPersistTaps="always"
    />
  );
}
