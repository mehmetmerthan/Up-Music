import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles/OnBoardingStyle";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Avatar } from "@rneui/themed";
const OnboardingScreen5 = ({ route }) => {
  const {
    selectedStyleTags = [],
    selectedRoleTags = [],
    about = "",
    location = "",
    gender = "",
  } = route?.params || {};
  const navigation = useNavigation();
  const { MediaPickerImageComponent, image, mediatype } = useMedia();
  function navigateToNextScreen() {
    navigation.navigate("SignUpScreen", {
      selectedStyleTags,
      selectedRoleTags,
      about,
      location,
      gender,
      image,
      mediatype,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a profile picture</Text>
      {image !== null ? (
        <Avatar
          size={150}
          rounded
          source={{ uri: image }}
          containerStyle={{ alignSelf: "center" }}
        />
      ) : (
        <Avatar
          size={150}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#595959", alignSelf: "center" }}
        />
      )}
      <MediaPickerImageComponent />
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRight}
          onPress={navigateToNextScreen}
        >
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen5;
