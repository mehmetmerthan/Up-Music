import { TextInput, Text, View, FlatList } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateStageStyle";
import Tag from "../../Components/TagComponents/Tag";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import { styleTagData } from "../../../data/TagData";
export default function CreateStageScreen() {
  const [text, onChangeText] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const { MediaPickerComponent, image } = useMedia();
  function submitPost() {
    setLoading(true);
    UploadPost({
      content: text,
      media: image,
      tag_styles: selectedTags,
      type: "stage_post",
      location: selectedLocation,
      price: price,
    });
    setLoading(false);
  }
  function renderItem() {
    return (
      <View>
        <MediaPickerComponent />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something about your stage"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Set Price</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.priceInput}
          onChangeText={setPrice}
          placeholder="20$ per hour"
          value={price}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <CityPicker setSelectedLocation={setSelectedLocation} />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
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
    <View>
      <FlatList
        data={[1]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
}
