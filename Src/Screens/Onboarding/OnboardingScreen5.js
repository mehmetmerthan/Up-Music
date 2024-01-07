import { React, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles/OnBoardingStyle";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Avatar } from "@rneui/themed";
const OnboardingScreen5 = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    navigation.navigate("SignUpScreen", {
      selectedStyleTags,
      selectedRoleTags,
      about,
      location,
      gender,
      image,
      mediatype,
    });
    setIsLoading(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a profile picture</Text>
      {image !== "" ? (
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
        <Button
          title={"Back"}
          buttonStyle={styles.buttonLeft}
          onPress={() => navigation.goBack()}
          type="outline"
        />
        <Button
          title={"Next"}
          buttonStyle={styles.buttonRight}
          onPress={navigateToNextScreen}
          loading={isLoading}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen5;
