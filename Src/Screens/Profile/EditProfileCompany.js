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
import { useHeaderHeight } from "@react-navigation/elements";
import styles from "../../Styles/UserProfileStyle";
import {
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Button, Image, Skeleton } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import useMedia from "../../Components/PickerComponents/useMedia";
import UploadUser from "../../Utils/Uploads/uploadUser";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import { isEqual, isEmpty } from "lodash";
import { useTranslation } from "react-i18next";

const EditProfileCompany = () => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(50, t("nameMax"))
      .required(t("nameRequired"))
      .min(3, t("nameMin")),
  });
  const route = useRoute();
  const { userData } = route?.params || {};
  const { url } = route?.params || null;
  const [name, onChangeName] = useState(userData?.name);
  const [selectedLocation, setSelectedLocation] = useState({});
  const [visibleCity, setVisibleCity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { MediaPickerImage: MediaPickerImagePP, image: imagePP } = useMedia();
  const [error, setError] = useState(null);
  async function OpenGalleryPP() {
    await MediaPickerImagePP();
  }
  const navigation = useNavigation();
  async function saveProfile() {
    if (isLoading) return;

    if (name === "") {
      return alert(t("nameRequired"));
    }

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
        formik.setFieldError("name", t("nameRequired"));
      } else {
        onChangeName(values.name);
      }
    },
  });
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
                right: 15,
                bottom: -100,
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
              </View>
            </View>
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
export default EditProfileCompany;
