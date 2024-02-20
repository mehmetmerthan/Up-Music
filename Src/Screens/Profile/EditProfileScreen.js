import { React, useState, useRef, useEffect } from "react";
import { View, Text, TextInput, FlatList, Animated } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../../Styles/UserProfileStyle";
import {
  EvilIcons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button, Chip } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadUser from "../../Utils/Uploads/uploadUser";
import { styleTagData, roleData } from "../../../data/TagData";
import Tag from "../../Components/Tag";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import Experiences from "../../Components/Experiences";
import { isEqual } from "lodash";
import AddExperience from "../../Components/AddExperiences";
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "Name must be less than 50")
    .required("Name is required"),
  about: yup
    .string()
    .max(1000, "About must be less than 1000")
    .required("About is required"),
});

const EditPorfileScreen = () => {
  const route = useRoute();
  const { userData } = route?.params || {};
  const withoutUserRoleData = roleData?.filter(
    (role) => !userData?.tag_roles?.includes(role)
  );
  const withoutUserStyleData = styleTagData?.filter(
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
      setError("Please select at least one music style");
      return;
    }
    if (userRoles.length === 0) {
      setError("Please select at least one role");
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
        formik.setFieldError("name", "Name is required");
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
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 0],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [10, 300],
    outputRange: [1, 0.5],
    extrapolate: "clamp",
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, -250],
    extrapolate: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-50, 250],
    outputRange: [1, 1.5],
    extrapolate: "clamp",
  });
  const borderRadius = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [60, 0],
    extrapolate: "clamp",
  });
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (imagePP) {
      setImage(imagePP);
    } else {
      setImage(userData?.key_pp);
    }
  }, [imagePP, userData?.key_pp]);
  function renderItem() {
    return (
      <View>
        <Animated.View
          style={[styles.userProfileTop, { height: headerHeight }]}
        >
          {image && (
            <Animated.Image
              source={{ uri: image }}
              style={[
                styles.profileImage,
                {
                  opacity: imageOpacity,
                  transform: [
                    { translateY: imageTranslateY },
                    { scaleX: imageScale },
                    { scaleY: imageScale },
                  ],
                  borderBottomLeftRadius: borderRadius,
                  borderBottomRightRadius: borderRadius,
                },
              ]}
            />
          )}
          <Animated.View
            style={[
              styles.profileNameContainer,
              {
                opacity: imageOpacity,
                transform: [
                  { translateY: imageTranslateY },
                  { scaleX: imageScale },
                  { scaleY: imageScale },
                ],
              },
            ]}
          >
            <Text style={styles.userProfileInfoName}>{userData.name}</Text>
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
          </Animated.View>
          <MaterialCommunityIcons
            name="circle-edit-outline"
            size={50}
            color="#008000"
            style={{
              position: "absolute",
              right: 15,
              bottom: -100,
            }}
            onPress={OpenGalleryPP}
          />
        </Animated.View>
        <View style={styles.userProfileBody}>
          <View style={styles.flexB}>
            <Button
              buttonStyle={styles.buttonSave}
              onPress={saveProfile}
              title="Save"
              loading={isLoading}
            />
            <Button
              buttonStyle={styles.buttonEdit}
              onPress={() => navigation.navigate("ProfileScreen")}
              title="Cancel"
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
                    Info
                  </Text>
                  <View style={styles.sectionContent}>
                    <Text style={styles.subHeader}>Name</Text>
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
                      placeholder="your name"
                      onSubmitEditing={formik.handleSubmit}
                    />
                    <Text style={styles.subHeader}>About</Text>
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
                      placeholder="Write something about yourself"
                      onSubmitEditing={formik.handleSubmit}
                    />
                    <Text style={styles.subHeader}>Location</Text>
                    {!visibleCity && (
                      <Button
                        title={"Select Location"}
                        onPress={() => setVisibleCity(true)}
                        buttonStyle={styles.button}
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
                    Music Styles
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
                      title={"add"}
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
                      title={"Save"}
                      onPress={saveStyle}
                      buttonStyle={styles.button}
                    />
                  )}
                </View>
              </View>
              <View style={styles.divider} />
              <Text style={styles.sectionHeadingText} numberOfLines={1}>
                Roles
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
                  title={"add"}
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
                <Button
                  title={"Save"}
                  onPress={saveRole}
                  buttonStyle={styles.button}
                />
              )}
            </View>
          </View>
          <View style={styles.divider} />
          {experiences && (
            <>
              <Text style={styles.sectionHeadingText}>Experiences</Text>
              <Experiences
                experiencesData={experiences}
                accessory={true}
                onDeleteExperience={handleDeleteExperience}
              />
            </>
          )}
          {!visibleExperience && (
            <Button
              title={"Add Experience"}
              onPress={() => setVisibleExperience(true)}
              buttonStyle={styles.button}
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
    );
  }
  return (
    <FlatList
      data={[1]}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      keyboardShouldPersistTaps="always"
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    />
  );
};
export default EditPorfileScreen;
