import {
  TextInput,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
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
export default function CreateBandForMusicianScreen() {
  const { t } = useTranslation();
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedRoleExisting, setSelectedRoleExisting] = useState([]);
  const navigation = useNavigation();
  async function submitPost() {
    if (text === "") {
      alert(t("fillBandFields"));
      return;
    }
    try {
      setLoading(true);
      await UploadPost({
        content: text,
        tag_styles: selectedStyleTags,
        post_type: POST_TYPES.BAND,
        location: selectedLocation,
        tag_roles_needed: selectedRoleTags,
        tag_roles: selectedRoleExisting,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      onChangeText("");
      setSelectedRoleTags([]);
      setSelectedStyleTags([]);
      setSelectedLocation({});
      setSelectedRoleExisting([]);
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
          <Text style={styles.header}>{t("fillBandFields")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={t("bandPlaceholder")}
            value={text}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("bandLocation")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <CityPicker setSelectedLocation={setSelectedLocation} />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("selectMusicianExisting")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={RoleTags}
            selectedTags={selectedRoleExisting}
            setSelectedTags={setSelectedRoleExisting}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("selectMusicianNeeded")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={RoleTags}
            selectedTags={selectedRoleTags}
            setSelectedTags={setSelectedRoleTags}
          />
          <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
          <Text style={styles.header}>{t("selectMusicStyle")}</Text>
          <Divider inset={true} insetType="middle" orientation="vertical" />
          <Tag
            tagData={StyleTags}
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
