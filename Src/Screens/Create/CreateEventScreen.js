  import { TextInput, Text, View, ScrollView } from "react-native";
  import { React, useState, useEffect } from "react";
  import styles from "../../Styles/Create/CreateEventStyle";
  import Tag from "../../Components/TagComponents/Tag";
  import { Divider, Button, Dialog } from "@rneui/themed";
  import { useLocation } from "../../Components/PickerComponents/LocationPicker";
  import { Feather } from "@expo/vector-icons";
  import DropDownPicker from "react-native-dropdown-picker";
  import useMedia from "../../Components/PickerComponents/useMedia";
  import UploadPost from "../../Utils/Uploads/uploadPost";
  import getPartipicantsList from "../../Utils/getPartipicantsList";
  import { previewStyleTagData } from "../../../data/TagData";
  export default function CreateEventScreen() {
    const [text, onChangeText] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [isVisibleUser, setVisibleUser] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);
    const { TagComponent, selectedTags } = Tag({ tagData: previewStyleTagData });
    const { MediaPicker, image } = useMedia();
    const { LocationPicker, location } = useLocation();

    async function submitPost() {
      setLoading(true);
      await UploadPost({
        content: text,
        media: image,
        tag_all: selectedTags,
        type: "main_post",
        location: location,
        partipicants: value,
      });
      setLoading(false);
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
        <MediaPicker />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <LocationPicker />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <View>
          <Button
            title="Invite friends"
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
            icon={<Feather name="send" size={24} color="black" />}
            onPress={() => setVisibleUser(true)}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Dialog
            isVisible={isVisibleUser}
            onBackdropPress={() => setVisibleUser(false)}
          >
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Add partipicants</Text>
              <View
                style={{
                  flex: 1,
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
        </View>
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TagComponent />
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
      </ScrollView>

    );
  }
