import { React, useState } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import Post from "../../Components/PostComponents/UserPost";
import { Button, Chip } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import useMedia from "../../Components/PickerComponents/useMedia";
import UpdateUser from "../../Utils/Updates/updateUser";
import { S3ImageAvatar } from "../../Components/S3Media";
import { styleTagData, roleData } from "../../../data/TagData";
import Tag from "../../Components/TagComponents/Tag";
import LocationPicker from "../../Components/PickerComponents/LocationPicker";
const validationSchema = yup.object().shape({
  age: yup
    .number()
    .required("Age is required")
    .integer("Age must be a whole number")
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100"),
});
const EditPorfileScreen = () => {
  const route = useRoute();
  const { userData } = route?.params || {};
  const userMusicStyles = userData?.tag?.tag_styles;
  const userRoles = userData?.tag?.tag_roles;
  const userAbout = userData?.about;
  const userPP = userData?.key_pp;
  const userAge = userData?.age;
  const userGender = userData?.gender;
  const filteredRoleData = roleData?.filter(
    (role) => !userRoles?.includes(role)
  );
  const filteredStyleData = styleTagData?.filter(
    (style) => !userMusicStyles?.includes(style)
  );
  const [age, setAge] = useState(userAge);
  const [text, onChangeText] = useState(userAbout);
  const [name, onChangeName] = useState(userData?.name);
  const [musicStyles, setMusicStyles] = useState(userMusicStyles);
  const [role, setRole] = useState(userRoles);
  const [allMusicStyles, setAllMusicStyles] = useState(filteredStyleData);
  const [allRoles, setAllRoles] = useState(filteredRoleData);
  const [visibleStyleTag, setVisibleStyleTag] = useState(false);
  const [visibleRoleTag, setVisibleRoleTag] = useState(false);
  const [visibleGender, setVisibleGender] = useState(false);
  const [visibleLocation, setVisibleLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const { MediaPickerImage: MediaPickerImagePP, image: imagePP } = useMedia();
  async function OpenGalleryPP() {
    await MediaPickerImagePP();
  }
  const navigation = useNavigation();
  async function saveProfile() {
    await UpdateUser({
      name: name === userData?.name ? "" : name,
      about: text === userData?.about ? "" : text,
      urlPP: imagePP,
      age: age === userData?.age ? "" : age,
      location: location === userData?.location ? "" : location,
      tagStyle: musicStyles === userMusicStyles ? "" : musicStyles,
      tagRole: role === userRoles ? "" : role,
      mediaType: "image/jpeg",
      userData: userData,
      gender: selectedGender === userGender ? "" : selectedGender,
    });
    navigation.navigate("ProfileScreen");
  }
  const formik = useFormik({
    initialValues: {
      age: age,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAge(values.age);
    },
  });
  function handleMusicStyleRemove(tag) {
    const newMusicStyles = musicStyles.filter((t) => t !== tag);
    setMusicStyles(newMusicStyles);
  }
  function handleRoleRemove(tag) {
    const newRole = role.filter((t) => t !== tag);
    setRole(newRole);
  }
  function handleMusicStyleAdd(tag) {
    const newMusicStyles = [...musicStyles, ...tag];
    setMusicStyles(newMusicStyles);
  }
  function handleRoleAdd(tag) {
    const newRole = [...role, ...tag];
    setRole(newRole);
  }
  function saveStyle() {
    setSelectedStyleTags([]);
    setVisibleStyleTag(false);
    if (selectedStyleTags !== "") {
      const hasIntersection = selectedStyleTags.some((tag) =>
        musicStyles.includes(tag)
      );
      if (!hasIntersection) {
        handleMusicStyleAdd(selectedStyleTags);
        const newStyleData = allMusicStyles.filter(
          (style) => !selectedStyleTags.includes(style)
        );
        setAllMusicStyles(newStyleData);
      }
    }
  }
  function saveRole() {
    setSelectedRoleTags([]);
    setVisibleRoleTag(false);
    if (selectedRoleTags !== "") {
      const hasIntersection = selectedRoleTags.some((tag) =>
        userRoles.includes(tag)
      );
      if (!hasIntersection) {
        handleRoleAdd(selectedRoleTags);
        const newRoleData = allRoles.filter(
          (role) => !selectedRoleTags.includes(role)
        );
        setAllRoles(newRoleData);
      }
    }
  }
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={styles.userProfileTop}>
        <Image
          source={{ uri: "https://picsum.photos/800/800" }}
          style={styles.userProfileTopBg}
        />
        <View style={styles.userProfileTopOverlay} />
        <S3ImageAvatar
          imageKey={userPP}
          size={150}
          accessory={OpenGalleryPP}
          url={imagePP}
        />
        <Text style={styles.userProfileInfoName}>{userData.name}</Text>
        <View style={styles.userProfileInfoLocation}>
          {userData.location?.city && (
            <EvilIcons
              name="location"
              size={20}
              color="rgba(255, 255, 255, 0.5)"
            />
          )}
          <Text style={styles.userProfileInfoLocationText}>
            {userData.location?.city} {userData.location?.city && ","}{" "}
            {userData.location?.country}
          </Text>
        </View>
        <Text style={styles.userProfileInfoJobTitle}>
          {userGender} {userGender && userAge && " ,"} {userAge}
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
          {/* <Pressable
            style={styles.btnB}
            activeOpacity={0.8}
            onPress={saveProfile}
          >
            <Text style={styles.btnTextB} numberOfLines={1}>
              Save
            </Text>
          </Pressable> */}
          <Button
            buttonStyle={styles.buttonSave}
            onPress={saveProfile}
            title="Save"
          />
        </View>

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
                    onChangeText={onChangeName}
                    value={name}
                    multiline={false}
                    maxLength={50}
                    placeholder="your name"
                  />
                  <Text style={styles.subHeader}>About</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    multiline={true}
                    maxLength={1000}
                    placeholder="Write something about yourself"
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
                  <Text style={styles.baseText}>{selectedGender}</Text>
                  {visibleGender && (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Chip
                        title={"male"}
                        titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                        buttonStyle={{ borderColor: "#000000" }}
                        type="outline"
                        containerStyle={{
                          marginVertical: 5,
                          marginHorizontal: 5,
                        }}
                        style={{ backgroundColor: "#ccc" }}
                        onPress={() => {
                          setVisibleGender(false);
                          setSelectedGender("Male");
                        }}
                      />
                      <Chip
                        title={"female"}
                        titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                        buttonStyle={{ borderColor: "#000000" }}
                        type="outline"
                        containerStyle={{
                          marginVertical: 5,
                          marginHorizontal: 5,
                        }}
                        style={{ backgroundColor: "#ccc" }}
                        onPress={() => {
                          setVisibleGender(false);
                          setSelectedGender("Female");
                        }}
                      />
                      <Chip
                        title={"other"}
                        titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                        buttonStyle={{ borderColor: "#000000" }}
                        type="outline"
                        containerStyle={{
                          marginVertical: 5,
                          marginHorizontal: 5,
                        }}
                        style={{ backgroundColor: "#ccc" }}
                        onPress={() => {
                          setVisibleGender(false);
                          setSelectedGender("Other");
                        }}
                      />
                    </View>
                  )}

                  {!visibleGender && (
                    <Button
                      buttonStyle={styles.button}
                      onPress={() => setVisibleGender(true)}
                      title="Change gender"
                    />
                  )}
                  <Text style={styles.subHeader}>Location</Text>
                  <Text style={styles.baseText}>
                    {selectedLocation?.city} {selectedLocation?.city && ","}{" "}
                    {selectedLocation?.country}
                  </Text>
                  {!visibleLocation && (
                    <Button
                      buttonStyle={styles.button}
                      title={"Chancge location"}
                      onPress={() => setVisibleLocation(true)}
                    />
                  )}
                  {visibleLocation && (
                    <LocationPicker
                      setSelectedLocation={setSelectedLocation}
                      setVisibleLocation={setVisibleLocation}
                    />
                  )}
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
                  {musicStyles?.map((item, index) => (
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
                    tagData={allMusicStyles}
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
              {role?.map((item, index) => (
                <Chip
                  key={index}
                  title={item}
                  titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                  buttonStyle={{ borderColor: "#000000" }}
                  type="outline"
                  containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
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
                tagData={allRoles}
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
    </ScrollView>
  );
};
export default EditPorfileScreen;
