import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateEventStyle";
import Tag from "../../Components/TagComponents/Tag";
import { Divider, Button } from "@rneui/themed";
import { LocationPicker } from "../../Components/PickerComponents/LocationPicker";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData } from "../../../data/TagData";
import { useNavigation } from "@react-navigation/native";
export default function CreateEventScreen() {
  const [text, onChangeText] = useState("");
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { MediaPickerComponent, image } = useMedia();
  const navigation = useNavigation();
  async function submitPost() {
    setLoading(true);
    await UploadPost({
      content: text,
      media: image,
      tag_styles: selectedStyleTags,
      post_type: "event_post",
      location: selectedLocation,
    });
    setLoading(false);
    navigation.navigate("EventStack");
  }
  function renderItem() {
    return (
      <View>
        <MediaPickerComponent />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <LocationPicker setSelectedLocation={setSelectedLocation}/>
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedStyleTags}
          setSelectedTags={setSelectedStyleTags}
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
