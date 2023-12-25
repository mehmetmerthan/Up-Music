import {
  TextInput,
  Text,
  View,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import Tag from "../../Components/TagComponents/Tag";
import { Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";

export default function CreateMusicianScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { LocationPicker, location } = useLocation();
  const { TagComponent, selectedTags } = Tag({});
  function submitPost() {
    setLoading(true);
    UploadPost({
      content: text,
      tag_all: selectedTags,
      type: "musician_post",
      location: location,
    });
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <Text style={styles.header}>Tell about yourself</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="I am a musician..."
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <LocationPicker />
        <Text style={styles.header}>What kind of musician are you ?</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TagComponent />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select music styles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag />
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
