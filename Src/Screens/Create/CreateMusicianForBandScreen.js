import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData, roleData } from "../../../data/TagData";
import { useNavigation } from "@react-navigation/native";
export default function CreateMusicianForBandScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert("Please write something about yourself");
      return;
    }
    setLoading(true);
    await UploadPost({
      content: text,
      tag_roles: selectedRoleTags,
      tag_styles: selectedStyleTags,
      post_type: "musicianForBand_post",
      location: selectedLocation,
    });
    setLoading(false);
    navigation.navigate("AnnouncementsStack");
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
        <Text style={styles.header}>Select your location</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <CityPicker setSelectedLocation={setSelectedLocation} />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
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
