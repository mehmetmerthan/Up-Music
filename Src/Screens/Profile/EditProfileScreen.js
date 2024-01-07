import { React, useState } from "react";
import { View, Text, Image, TextInput, FlatList } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import Post from "../../Components/PostComponents/UserPost";
import { Button, Chip } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadUser from "../../Utils/Uploads/uploadUser";
import { S3ImageAvatar } from "../../Components/S3Media";
import { styleTagData, roleData } from "../../../data/TagData";
import Tag from "../../Components/TagComponents/Tag";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import GenderPicker from "../../Components/PickerComponents/GenderPicker";
const validationSchema = yup.object().shape({
  age: yup
    .number()
    .integer("Age must be a whole number")
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100")
    .required("Age is required"),
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
  const [age, setAge] = useState(userData?.age);
  const [text, onChangeText] = useState(userData?.about);
  const [name, onChangeName] = useState(userData?.name);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedGender, setSelectedGender] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { MediaPickerImage: MediaPickerImagePP, image: imagePP } = useMedia();
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
    const locationTemplate = {
      city: userData?.city,
      country: userData?.country,
    };
    await UploadUser({
      name: name === userData?.name ? "" : name,
      about: text === userData?.about ? "" : text,
      urlPP: imagePP,
      age: age === userData?.age ? "" : age,
      location:
        JSON.stringify(selectedLocation) === JSON.stringify(locationTemplate)
          ? ""
          : selectedLocation,
      tagStyle: userData?.tag_styles === userMusicStyles ? "" : userMusicStyles,
      tagRole: userData?.tag_roles === userRoles ? "" : userRoles,
      mediaType: "image/jpeg",
      userData: userData,
      gender: selectedGender === userData?.gender ? "" : selectedGender,
      operationType: "update",
    });
    navigation.navigate("ProfileScreen");
    setIsLoading(false);
  }
  const formik = useFormik({
    initialValues: {
      age: age,
      name: name,
      about: text,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAge(values.age);
      onChangeName(values.name);
      onChangeText(values.about);
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
  function renderItem() {
    return (
      <View>
        <View style={styles.userProfileTop}>
          <Image
            source={{ uri: "https://picsum.photos/800/800" }}
            style={styles.userProfileTopBg}
          />
          <View style={styles.userProfileTopOverlay} />
          <S3ImageAvatar
            imageKey={userData?.key_pp}
            size={150}
            accessory={OpenGalleryPP}
            url={imagePP}
          />
          <Text style={styles.userProfileInfoName}>{userData.name}</Text>
          <View style={styles.userProfileInfoLocation}>
            {userData?.city && (
              <EvilIcons
                name="location"
                size={20}
                color="rgba(255, 255, 255, 0.5)"
              />
            )}
            <Text style={styles.userProfileInfoLocationText}>
              {userData?.city} {userData?.city && ","} {userData?.country}
            </Text>
          </View>
          <Text style={styles.userProfileInfoJobTitle}>
            {userData?.gender} {userData?.gender && userData?.age && " ,"}{" "}
            {userData?.age}
          </Text>

          <View style={[styles.userProfileWidget, styles.widget]}>
            <View style={styles.widgetItem}>
              <Text style={styles.widgetItemLabel}>FOLLOWING</Text>
              <Text style={styles.widgetItemValue}>638</Text>
            </View>
            <View style={[styles.widgetItem, styles.widgetItemLast]}>
              <Text style={styles.widgetItemLabel}>FOLLOWERS</Text>
              <Text style={styles.widgetItemValue}>356</Text>
            </View>
          </View>
        </View>
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
              //onPress={() => navigation.navigate("ProfileScreen")}
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
                  <View style={styles.sectionHeading}>
                    <Text style={styles.sectionHeadingText} numberOfLines={1}>
                      Info
                    </Text>
                  </View>
                  <View style={styles.sectionContent}>
                    <Text style={styles.subHeader}>Name</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={formik.handleChange("name")}
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
                      onChangeText={formik.handleChange("about")}
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
                    <Text style={styles.subHeader}>Age</Text>
                    <Text style={styles.baseText}>{age}</Text>
                    <TextInput
                      style={styles.inputAge}
                      keyboardType="numeric"
                      onChangeText={formik.handleChange("age")}
                      onBlur={() => {
                        formik.handleBlur("age");
                        formik.handleSubmit();
                      }}
                      value={formik.values.age}
                      placeholder="Age"
                      onSubmitEditing={formik.handleSubmit}
                    />
                    {formik.touched.age && formik.errors.age && (
                      <Text style={{ color: "red" }}>{formik.errors.age}</Text>
                    )}
                    <Text style={styles.subHeader}>Gender</Text>
                    <GenderPicker
                      selectedGender={selectedGender}
                      setSelectedGender={setSelectedGender}
                    />
                    <Text style={styles.subHeader}>Location</Text>
                    <CityPicker setSelectedLocation={setSelectedLocation} />
                  </View>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.gridItem}>
                <View style={styles.section}>
                  <View style={styles.sectionHeading}>
                    <Text style={styles.sectionHeadingText} numberOfLines={1}>
                      Music Styles
                    </Text>
                  </View>

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
              <View style={styles.sectionHeading}>
                <Text style={styles.sectionHeadingText} numberOfLines={1}>
                  Roles
                </Text>
              </View>
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
          <Text style={styles.PostText}> Posts </Text>
          <Post />
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
    />
  );
};
export default EditPorfileScreen;
