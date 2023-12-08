import {
  TextInput,
  Text,
  View,
  ScrollView,
} from "react-native";
import { React, useState, useEffect } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import Tag from "../../Components/TagComponents/Tag";
import TagMusician from "../../Components/TagComponents/TagMusician";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { Dialog, Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/useLocation";
import UploadPost from "../../Utils/Uploads/uploadPost";
import getPartipicantsList from "../../Utils/getPartipicantsList";

export default function CreateGroupScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPartipicantsDialogVisible, setPartipicantsDialogVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([]);
  const { TagComponent, selectedTags } = Tag({});
  const { LocationPicker, location } = useLocation();
  const { MusicianTagComponent, selectedMusicianTags } = TagMusician({});
  function submitPost() {
    const participantsList = value.map((item) => item.value);
    const musicianList = selectedMusicianTags.map((item) => item.value);
    setLoading(true)
    UploadPost({
      content: text,
      tag_all: selectedTags,
      type: "group_post",
      location: location,
      partipicants: participantsList,
      musician_needed: musicianList
    });
    setLoading(false)
  }

  useEffect(() => {
    async function getPartipicants() {
      const { partipicantsList } = await getPartipicantsList();
      setItems(partipicantsList);
    }
    getPartipicants();
  }, []);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
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
        <LocationPicker />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select partipicants</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Button
          title="Add partipicants"
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          type="outline"
          titleStyle={{ color: "black" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          icon={<Ionicons name="person-add-outline" size={24} color="black" />}
          onPress={() => setPartipicantsDialogVisible(!isPartipicantsDialogVisible)}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select the musicians needed</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <MusicianTagComponent />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select music styles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TagComponent />
        <Divider orientation="vertical" />

        <Dialog
          isVisible={isPartipicantsDialogVisible}
          onBackdropPress={() =>
            setPartipicantsDialogVisible(!isPartipicantsDialogVisible)
          }
        //onDismiss={() =>
        //setPartipicantsDialogVisible(!isPartipicantsDialogVisible)
        //}
        >
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Add partipicants</Text>
            <View
              style={{
                //backgroundColor: "#171717",
                flex: 1,
                //alignItems: "center",
                //justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                mode="SIMPLE"
                searchable={true}
              />
            </View>
          </View>
        </Dialog>
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
    </ScrollView>
  );
}
