import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../../Styles/UserProfileStyle";
import {
  EvilIcons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Button, Chip, Image, Skeleton } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadUser from "../../Utils/Uploads/uploadUser";
import StyleTags from "../../../Constants/Data/StyleTags";
import RoleTags from "../../../Constants/Data/RoleTags";
import Tag from "../../Components/Tag";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import Experiences from "../../Components/Experiences";
import { isEqual } from "lodash";
import AddExperience from "../../Components/AddExperiences";
import { useTranslation } from "react-i18next";

const EditPorfileScreen = () => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(50, t("nameSizeMax"))
      .required(t("nameRequired"))
      .min(3, t("nameSizeMin")),
    about: yup
      .string()
      .max(500, t("aboutSizeMax"))
      .required(t("aboutRequired"))
      .min(10, t("aboutSizeMin")),
  });
  const route = useRoute();
  const { userData } = route?.params || {};
  const { url } = route?.params || null;
  const withoutUserRoleData = RoleTags?.filter(
    (role) => !userData?.tag_roles?.includes(role)
  );
  const withoutUserStyleData = StyleTags?.filter(
    (style) => !userData?.tag_styles?.includes(style)
  );
  const [userMusicStyles, setUserMusicStyles] = useState(userData?.tag_styles);
  const [userRoles, setUserRoles] = useState(userData?.tag_roles);
  const [withoutMusicStyles, setWithoutMusicStyles] =
    useState(withoutUserStyleData);
  const [withoutRoles, setWithoutRoles] = useState(withoutUserRoleData);
  const [visibleStyleTag, setVisibleStyleTag] = useState(false);
  const [visibleRoleTag, setVisibleRoleTag] = useState(false);
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [text, onChangeText] = useState(userData?.about);
  const [name, onChangeName] = useState(userData?.name);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [visibleCity, setVisibleCity] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { MediaPickerImage: MediaPickerImagePP, image: imagePP } = useMedia();
  const [experiences, setExperiences] = useState(userData?.experiences);
  const [visibleExperience, setVisibleExperience] = useState(false);
  const handleDeleteExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };
  async function OpenGalleryPP() {
    await MediaPickerImagePP();
  }
  const navigation = useNavigation();
  async function saveProfile() {
    setIsLoading(true);
    if (userMusicStyles.length === 0) {
      setError(t("selectLeastOneStyle"));
      return;
    }
    if (userRoles.length === 0) {
      setError(t("selectLeastOneRole"));
      return;
    }
    if (formik.errors.name) {
      return alert(formik.errors.name);
    }
    const locationTemplate = {
      city: userData?.city,
      country: userData?.country,
    };
    await UploadUser({
      name: name === userData?.name ? "" : name,
      about: text === userData?.about ? "" : text,
      urlPP: imagePP,
      location: isEqual(selectedLocation, locationTemplate)
        ? ""
        : selectedLocation,
      experiencesData: isEqual(userData?.experiences, experiences)
        ? ""
        : experiences,
      tagStyle: userData?.tag_styles === userMusicStyles ? "" : userMusicStyles,
      tagRole: userData?.tag_roles === userRoles ? "" : userRoles,
      userData: userData,
      operationType: "update",
    });
    const worker = "worker";
    navigation.navigate("ProfileScreen", { worker });
    setIsLoading(false);
  }
  const formik = useFormik({
    initialValues: {
      name: name,
      about: text,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (!values.name) {
        formik.setFieldError("name", t("nameRequired"));
      } else {
        onChangeName(values.name);
        onChangeText(values.about);
      }
    },
  });

  function handleMusicStyleRemove(tag) {
    const newMusicStyles = userMusicStyles?.filter((t) => t !== tag);
    setUserMusicStyles(newMusicStyles);
    const newWithoutMusicStyles = [...withoutMusicStyles, tag];
    setWithoutMusicStyles(newWithoutMusicStyles);
  }
  function handleRoleRemove(tag) {
    const newRole = userRoles.filter((t) => t !== tag);
    setUserRoles(newRole);
    const newWithoutRoles = [...withoutRoles, tag];
    setWithoutRoles(newWithoutRoles);
  }
  function saveStyle() {
    setVisibleStyleTag(false);
    if (selectedStyleTags.length !== 0) {
      const newMusicStyles = userMusicStyles
        ? [...userMusicStyles, ...selectedStyleTags]
        : selectedStyleTags;
      setUserMusicStyles(newMusicStyles);
      const newWithoutMusicStyles = withoutMusicStyles?.filter(
        (style) => !selectedStyleTags?.includes(style)
      );
      setWithoutMusicStyles(newWithoutMusicStyles);
    }
    setSelectedStyleTags([]);
  }
  function saveRole() {
    setVisibleRoleTag(false);
    if (selectedRoleTags.length !== 0) {
      const newRole = userRoles
        ? [...userRoles, ...selectedRoleTags]
        : selectedRoleTags;
      setUserRoles(newRole);
      const newWithoutRoles = withoutRoles?.filter(
        (role) => !selectedRoleTags?.includes(role)
      );
      setWithoutRoles(newWithoutRoles);
    }
    setSelectedRoleTags([]);
  }
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (imagePP) {
      setImage(imagePP);
    } else {
      setImage(url);
    }
  }, [imagePP, url]);
  function renderItem() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.userProfileTop}>
            {image ? (
              <Image
                source={{ uri: image }}
                PlaceholderContent={<Skeleton width={"100%"} height={300} />}
                style={{ resizeMode: "cover" }}
                containerStyle={{
                  width: "100%",
                  height: 300,
                  resizeMode: "cover",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            ) : (
              <FontAwesome name="user-circle-o" size={300} color="#000000" />
            )}
            <View style={styles.profileNameContainer}>
              <Text style={styles.userProfileInfoName}>{userData?.name}</Text>
              {userData?.city && (
                <View style={styles.userProfileInfoLocation}>
                  <EvilIcons
                    name="location"
                    size={20}
                    color="rgba(255, 255, 255, 0.5)"
                  />
                  <Text style={styles.userProfileInfoLocationText}>
                    {userData?.city}, {userData?.country}
                  </Text>
                </View>
              )}
            </View>
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={50}
              color="#008000"
              style={{
                position: "absolute",
                right: 30,
                bottom: -10,
              }}
              onPress={OpenGalleryPP}
            />
          </View>
          <View style={styles.userProfileBody}>
            <View style={styles.flexB}>
              <Button
                buttonStyle={styles.buttonSave}
                onPress={saveProfile}
                title={t("save")}
                loading={isLoading}
              />
              <Button
                buttonStyle={styles.buttonEdit}
                onPress={() => navigation.navigate("ProfileScreen")}
                title={t("cancel")}
                type="outline"
                titleStyle={styles.buttonTextEdit}
              />
            </View>
            <Text style={styles.errorText}>{error}</Text>
            <View style={styles.divider} />
            <View style={styles.grid}>
              <View style={styles.gridContent}>
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <Text style={styles.sectionHeadingText} numberOfLines={1}>
                      {t("info")}
                    </Text>
                    <View style={styles.sectionContent}>
                      <Text style={styles.subHeader}>{t("name")}</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                          formik.handleChange("name")(text);
                          formik.handleSubmit();
                        }}
                        onBlur={() => {
                          formik.handleBlur("name");
                          formik.handleSubmit();
                        }}
                        value={formik.values.name}
                        multiline={false}
                        maxLength={50}
                        placeholder={t("namePlaceholder")}
                        onSubmitEditing={formik.handleSubmit}
                      />
                      <Text style={styles.subHeader}>{t("about")}</Text>
                      <TextInput
                        style={styles.input}
                        onChangeText={(text) => {
                          formik.handleChange("about")(text);
                          formik.handleSubmit();
                        }}
                        value={formik.values.about}
                        onBlur={() => {
                          formik.handleBlur("about");
                          formik.handleSubmit();
                        }}
                        multiline={true}
                        maxLength={1000}
                        placeholder={t("tellAboutYourself")}
                        onSubmitEditing={formik.handleSubmit}
                      />
                      <Text style={styles.subHeader}>{t("location")}</Text>
                      {!visibleCity && (
                        <Button
                          title={t("selectLocation")}
                          onPress={() => setVisibleCity(true)}
                          buttonStyle={styles.button}
                          color={"black"}
                        />
                      )}
                      {visibleCity && (
                        <CityPicker
                          setSelectedLocation={setSelectedLocation}
                          setVisibleCity={setVisibleCity}
                        />
                      )}
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <Text style={styles.sectionHeadingText} numberOfLines={1}>
                      {t("musicStyles")}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginHorizontal: 10,
                        marginTop: 5,
                      }}
                    >
                      {userMusicStyles?.map((item, index) => (
                        <Chip
                          key={index}
                          title={item}
                          titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                          buttonStyle={{ borderColor: "#000000" }}
                          type="outline"
                          containerStyle={{
                            marginVertical: 5,
                            marginHorizontal: 5,
                          }}
                          style={{ backgroundColor: "#ccc" }}
                          icon={
                            <AntDesign
                              name="closecircle"
                              size={14}
                              color="black"
                              style={styles.tagIcon}
                              onPress={() => handleMusicStyleRemove(item)}
                            />
                          }
                          iconRight
                        />
                      ))}
                      <Chip
                        iconRight
                        title={t("add")}
                        icon={
                          <MaterialIcons
                            name="add-circle-outline"
                            size={18}
                            color="#ccc"
                            style={styles.tagIconAdd}
                          />
                        }
                        onPress={() => {
                          setVisibleStyleTag(true);
                        }}
                        titleStyle={{ color: "#1c1c1c", color: "#ccc" }}
                        buttonStyle={{ backgroundColor: "#008000" }}
                      />
                    </View>
                    {visibleStyleTag && (
                      <Tag
                        tagData={withoutMusicStyles}
                        selectedTags={selectedStyleTags}
                        setSelectedTags={setSelectedStyleTags}
                      />
                    )}
                    {visibleStyleTag && (
                      <Button
                        title={t("save")}
                        onPress={saveStyle}
                        buttonStyle={styles.button}
                      />
                    )}
                  </View>
                </View>
                <View style={styles.divider} />
                <Text style={styles.sectionHeadingText} numberOfLines={1}>
                  {t("role")}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginHorizontal: 10,
                    marginTop: 5,
                  }}
                >
                  {userRoles?.map((item, index) => (
                    <Chip
                      key={index}
                      title={item}
                      titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                      buttonStyle={{ borderColor: "#000000" }}
                      type="outline"
                      containerStyle={{
                        marginVertical: 5,
                        marginHorizontal: 5,
                      }}
                      style={{ backgroundColor: "#ccc" }}
                      icon={
                        <AntDesign
                          name="closecircle"
                          size={14}
                          color="black"
                          style={styles.tagIcon}
                          onPress={() => handleRoleRemove(item)}
                        />
                      }
                      iconRight
                    />
                  ))}
                  <Chip
                    iconRight
                    title={t("add")}
                    icon={
                      <MaterialIcons
                        name="add-circle-outline"
                        size={18}
                        color="#ccc"
                        style={styles.tagIconAdd}
                      />
                    }
                    onPress={() => {
                      setVisibleRoleTag(true);
                    }}
                    titleStyle={{ color: "#1c1c1c", color: "#ccc" }}
                    buttonStyle={{ backgroundColor: "#008000" }}
                  />
                </View>
                {visibleRoleTag && (
                  <Tag
                    tagData={withoutRoles}
                    selectedTags={selectedRoleTags}
                    setSelectedTags={setSelectedRoleTags}
                  />
                )}
                {visibleRoleTag && (
                  <Button onPress={saveRole} buttonStyle={styles.button} />
                )}
              </View>
            </View>
            <View style={styles.divider} />
            {experiences && (
              <>
                <Text style={styles.sectionHeadingText}>{t("experience")}</Text>
                <Experiences
                  experiencesData={experiences}
                  accessory={true}
                  onDeleteExperience={handleDeleteExperience}
                />
              </>
            )}
            {!visibleExperience && (
              <Button
                title={t("addExperience")}
                onPress={() => setVisibleExperience(true)}
                buttonStyle={styles.button}
                color={"black"}
              />
            )}
            {visibleExperience && (
              <AddExperience
                experiences={experiences}
                setExperiences={setExperiences}
                setVisibleExperience={setVisibleExperience}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={height}
    >
      <FlatList
        decelerationRate={0.8}
        data={[1]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        keyboardShouldPersistTaps="always"
        scrollEventThrottle={16}
      />
    </KeyboardAvoidingView>
  );
};
export default EditPorfileScreen;
