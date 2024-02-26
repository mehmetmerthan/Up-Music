import { React, useState, useRef, useEffect } from "react";
import { View, Text, TextInput, FlatList, Animated } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadUser from "../../Utils/Uploads/uploadUser";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import { isEqual } from "lodash";
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "Name must be less than 50")
    .required("Name is required"),
});

const EditPorfileCompany = () => {
  const route = useRoute();
  const { userData } = route?.params || {};

  const [name, onChangeName] = useState(userData?.name);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [visibleCity, setVisibleCity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { MediaPickerImage: MediaPickerImagePP, image: imagePP } = useMedia();

  async function OpenGalleryPP() {
    await MediaPickerImagePP();
  }
  const navigation = useNavigation();
  async function saveProfile() {
    setIsLoading(true);
    if (formik.errors.name) {
      return alert(formik.errors.name);
    }
    const locationTemplate = {
      city: userData?.city,
      country: userData?.country,
    };
    await UploadUser({
      name: name === userData?.name ? "" : name,

      urlPP: imagePP,
      location: isEqual(selectedLocation, locationTemplate)
        ? ""
        : selectedLocation,
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
            </View>
          </View>
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
export default EditPorfileCompany;
