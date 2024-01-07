import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateProfStyle";
import Tag from "../../Components/TagComponents/Tag";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData, roleData } from "../../../data/TagData";
export default function CreateProfScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  function submitPost() {
    setLoading(true);
    UploadPost({
      content: text,
      tag_styles: selectedStyleTags,
      tag_roles: selectedRoleTags,
      type: "prof_post",
      location: selectedLocation,
    });
    setLoading(false);
  }
  function renderItem() {
    return (
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
        <CityPicker setSelectedLocation={setSelectedLocation} />
        <Tag
          selectedTags={selectedRoleTags}
          setSelectedTags={setSelectedRoleTags}
          tagData={roleData}
        />
        <Divider orientation="vertical" />
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
      data={[""]}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      keyboardShouldPersistTaps="always"
    />
  );
}
