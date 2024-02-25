import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import StyleTags from "../../../Constants/Data/StyleTags";
import RoleTags from "../../../Constants/Data/RoleTags";
import { useNavigation } from "@react-navigation/native";
import { POST_TYPES } from "../../../Constants/Enums/PostTypes";
export default function CreateMusicianForCollaborateScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert("Please write something");
      return;
    }
    try {
      setLoading(true);
      await UploadPost({
        content: text,
        tag_styles: selectedStyleTags,
        post_type: POST_TYPES.MUSICIAN_FOR_COLLABORATE,
        location: selectedLocation,
        tag_roles_needed: selectedRoleTags,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      onChangeText("");
      setSelectedRoleTags([]);
      setSelectedStyleTags([]);
      setSelectedLocation({});
      navigation.goBack();
      navigation.goBack();
      navigation.navigate("AnnouncementsStack");
      setLoading(false);
    }
  }
  function renderItem() {
    return (
      <View>
        <View>
          <Text style={styles.header}>Write something</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Need a mix for my song."
            value={text}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select a location</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <CityPicker setSelectedLocation={setSelectedLocation} />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select the musicians needed</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={RoleTags}
            selectedTags={selectedRoleTags}
            setSelectedTags={setSelectedRoleTags}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select music styles</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={StyleTags}
            selectedTags={selectedStyleTags}
            setSelectedTags={setSelectedStyleTags}
          />
          <Divider style={{ borderWidth: 0.5 }} orientation="vertical" />
          <Button
            title="Create group"
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
