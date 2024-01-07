import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import styles from "../../Styles/Create/CreateEventStyle";
import Tag from "../../Components/TagComponents/Tag";
import { Divider, Button, Dialog } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadPost from "../../Utils/Uploads/uploadPost";
import getPartipicantsList from "../../Utils/getPartipicantsList";
import { styleTagData } from "../../../data/TagData";
import PartipicantsPicker from "../../Components/PickerComponents/PartipicantsPicker";
export default function CreateEventScreen() {
  const [text, onChangeText] = useState("");
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedPartipicants, setSelectedPartipicants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { MediaPickerComponent, image } = useMedia();
  async function submitPost() {
    setLoading(true);
    await UploadPost({
      content: text,
      media: image,
      tag_styles: selectedStyleTags,
      type: "main_post",
      location: selectedLocation,
      partipicants: selectedPartipicants,
    });
    setLoading(false);
  }

  useEffect(() => {
    async function getPartipicants() {
      // const { partipicantsList } = await getPartipicantsList();
      // setItems(partipicantsList);
    }
    getPartipicants();
  }, []);
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
        <CityPicker setSelectedLocation={setSelectedLocation} />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <PartipicantsPicker
          setSelectedPartipicants={setSelectedPartipicants}
          selectedPartipicants={selectedPartipicants}
        />
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
