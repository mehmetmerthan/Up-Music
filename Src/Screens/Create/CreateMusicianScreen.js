import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import Tag from "../../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import { LocationPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData, roleData } from "../../../data/TagData";
import { useNavigation } from "@react-navigation/native";
export default function CreateMusicianScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigation = useNavigation();
  async function submitPost() {
    setLoading(true);
    await UploadPost({
      content: text,
      tag_roles: selectedRoleTags,
      tag_styles: selectedStyleTags,
      post_type: "musician_post",
      location: selectedLocation,
    });
    setLoading(false);
    navigation.navigate("SearchMusicianStack");
  }
  function renderItem() {
    return (
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
        <LocationPicker setSelectedLocation={setSelectedLocation} />
        <Text style={styles.header}>What kind of musician are you ?</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedRoleTags}
          setSelectedTags={setSelectedRoleTags}
          tagData={roleData}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select music styles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedStyleTags}
          setSelectedTags={setSelectedStyleTags}
          tagData={styleTagData}
        />
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
    );
  }
  return (
    <FlatList
      data={[1]}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      keyboardShouldPersistTaps="always"
    />
  );
}
