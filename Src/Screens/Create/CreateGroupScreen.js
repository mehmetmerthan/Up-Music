import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import Tag from "../../Components/TagComponents/Tag";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import getPartipicantsList from "../../Utils/getPartipicantsList";
import PartipicantsPicker from "../../Components/PickerComponents/PartipicantsPicker";
import { styleTagData, roleData } from "../../../data/TagData";
export default function CreateGroupScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedPartipicants, setSelectedPartipicants] = useState([]);
  function submitPost() {
    setLoading(true);
    UploadPost({
      content: text,
      tag_styles: selectedStyleTags,
      type: "group_post",
      location: selectedLocation,
      partipicants: selectedPartipicants,
      musician_needed: selectedRoleTags,
    });
    setLoading(false);
  }

  useEffect(() => {
    // async function getPartipicants() {
    //   const { partipicantsList } = await getPartipicantsList();
    //   setItems(partipicantsList);
    // }
    // getPartipicants();
  }, []);
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
          <CityPicker setSelectedLocation={setSelectedLocation} />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>Select partipicants</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <PartipicantsPicker
            selectedPartipicants={selectedPartipicants}
            setSelectedPartipicants={setSelectedPartipicants}
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
      keyExtractor={(item) => item.id}
      keyboardShouldPersistTaps="always"
    />
  );
}
