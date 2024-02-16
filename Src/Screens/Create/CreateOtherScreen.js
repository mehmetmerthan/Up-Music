import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData, roleData } from "../../../data/TagData";
import { useNavigation } from "@react-navigation/native";
export default function CreateOtherScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedRoleExisting, setSelectedRoleExisting] = useState([]);
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert("Please write something about your group");
      return;
    }
    setLoading(true);
    await UploadPost({
      content: text,
      tag_styles: selectedStyleTags,
      post_type: "group_post",
      location: selectedLocation,
      tag_roles_needed: selectedRoleTags,
      tag_roles: selectedRoleExisting,
    });
    setLoading(false);
    //navigation.navigate("SearchGroupStack");
  }
  function renderItem() {
    return (
      <View>
        <View>
          <Text style={styles.header}>Write something about the group</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Searching a drummer for a rock band"
            value={text}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select group location</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <CityPicker setSelectedLocation={setSelectedLocation}/>
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select the musicians existing</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={roleData}
            selectedTags={selectedRoleExisting}
            setSelectedTags={setSelectedRoleExisting}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select the musicians needed</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={roleData}
            selectedTags={selectedRoleTags}
            setSelectedTags={setSelectedRoleTags}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select music styles</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={styleTagData}
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
