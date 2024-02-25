import {
  TextInput,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import { LocationPicker } from "../../Components/PickerComponents/LocationPicker";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadPost from "../../Utils/Uploads/uploadPost";
import StyleTags from "../../../Constants/Data/StyleTags";
import { useNavigation } from "@react-navigation/native";
import { POST_TYPES } from "../../../Constants/Enums/PostTypes";
import { MaterialIcons } from "@expo/vector-icons";
export default function CreateEventScreen() {
  const [text, onChangeText] = useState("");
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { MediaPickerImageEvent, image, MediaPickerReset } = useMedia();
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert("Please write something about your event");
      return;
    }
    try {
      setLoading(true);
      await UploadPost({
        content: text,
        media: image,
        tag_styles: selectedStyleTags,
        post_type: POST_TYPES.EVENT,
        location: selectedLocation,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      onChangeText("");
      setSelectedStyleTags([]);
      setSelectedLocation({});
      navigation.goBack();
      navigation.goBack();
      navigation.navigate("HomeScreen");
      setLoading(false);
    }
  }
  function renderItem() {
    return (
      <View>
        {image && (
          <>
            <Pressable
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                zIndex: 1,
                margin: 10,
                padding: 10,
              }}
              onPress={MediaPickerReset}
            >
              <MaterialIcons name="delete" size={40} color="black" />
            </Pressable>
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: 500,
                alignSelf: "center",
                margin: 12,
                zIndex: 0,
              }}
            />
          </>
        )}
        <Pressable onPress={MediaPickerImageEvent}>
          <MaterialIcons
            name="backup"
            size={100}
            color="#4a4a4a"
            style={{ alignSelf: "center" }}
          />
        </Pressable>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <LocationPicker setSelectedLocation={setSelectedLocation} />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedStyleTags}
          setSelectedTags={setSelectedStyleTags}
          tagData={StyleTags}
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
