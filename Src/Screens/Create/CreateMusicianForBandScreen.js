import {
  TextInput,
  Text,
  View,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import Tag from "../../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import UploadPost from "../../Utils/Uploads/uploadPost";
import StyleTags from "../../../Constants/Data/StyleTags";
import RoleTags from "../../../Constants/Data/RoleTags";
import { useNavigation } from "@react-navigation/native";
import { POST_TYPES } from "../../../Constants/Enums/PostTypes";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTranslation } from "react-i18next";
export default function CreateMusicianForBandScreen() {
  const { t } = useTranslation();
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert(t("tellAboutYourself"));
      return;
    }
    try {
      setLoading(true);
      await UploadPost({
        content: text,
        tag_roles: selectedRoleTags,
        tag_styles: selectedStyleTags,
        post_type: POST_TYPES.MUSICIAN_FOR_BAND,
        location: selectedLocation,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      onChangeText("");
      setSelectedRoleTags([]);
      setSelectedStyleTags([]);
      setSelectedLocation({});
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
          <Text style={styles.header}>{t("tellAboutYourself")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={t("musicianPlaceholder")}
            value={text}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("musicianLocation")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <CityPicker setSelectedLocation={setSelectedLocation} />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("musicianRole")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            selectedTags={selectedRoleTags}
            setSelectedTags={setSelectedRoleTags}
            tagData={RoleTags}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("selectMusicStyle")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            selectedTags={selectedStyleTags}
            setSelectedTags={setSelectedStyleTags}
            tagData={StyleTags}
          />
          <Divider orientation="vertical" />
          <Button
            color={"black"}
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
        keyExtractor={(item) => item}
        keyboardShouldPersistTaps="always"
      />
    </KeyboardAvoidingView>
  );
}
