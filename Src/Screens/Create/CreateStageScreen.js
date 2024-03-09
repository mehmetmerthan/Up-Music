import {
  TextInput,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/Tag";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Divider, Button } from "@rneui/themed";
import { LocationPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import StyleTags from "../../../Constants/Data/StyleTags";
import { useNavigation } from "@react-navigation/native";
import { POST_TYPES } from "../../../Constants/Enums/PostTypes";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTranslation } from "react-i18next";
export default function CreateStageScreen() {
  const { t } = useTranslation();
  const [text, onChangeText] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const { MediaPickerImageComponent, image } = useMedia();
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert(t("fillStageFields"));
      return;
    }
    try {
      setLoading(true);
      await UploadPost({
        content: text,
        media: image,
        tag_styles: selectedTags,
        post_type: POST_TYPES.STAGE,
        location: selectedLocation,
        price: price,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      onChangeText("");
      setSelectedTags([]);
      setSelectedLocation({});
      setPrice("");
      navigation.goBack();
      navigation.goBack();
      navigation.navigate("AnnouncementsStack");
      setLoading(false);
    }
  }
  const height = useHeaderHeight();
  function renderItem() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <MediaPickerImageComponent />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={t("fillStageFields")}
            value={text}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("setPrice")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <TextInput
            style={styles.priceInput}
            onChangeText={setPrice}
            placeholder={t("setPricePlaceholder")}
            value={price}
            keyboardType="numeric"
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <LocationPicker setSelectedLocation={setSelectedLocation} />
          <Text style={styles.header}>{t("selectMusicStyle")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagData={StyleTags}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Button
            title={t("share")}
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
      </TouchableWithoutFeedback>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={height + 20}
    >
      <FlatList
        decelerationRate={0.8}
        data={[1]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        keyboardShouldPersistTaps="always"
      />
    </KeyboardAvoidingView>
  );
}
