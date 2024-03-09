import { React, useState } from "react";
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../../../Styles/OnBoardingStyle";
import Experiences from "../../../../Components/Experiences";
import AddExperience from "../../../../Components/AddExperiences";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTranslation } from "react-i18next";
const OnboardingScreen3 = ({ route }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const {
    selectedStyleTags = [],
    selectedRoleTags = [],
    about = "",
    location = "",
    image = "",
  } = route?.params || {};
  const navigation = useNavigation();
  function navigateToNextScreen() {
    setIsLoading(true);
    navigation.navigate("PersonalSignUpScreen", {
      selectedStyleTags,
      selectedRoleTags,
      about,
      location,
      experiences,
      image,
    });
    setIsLoading(false);
  }
  function renderItem() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <AddExperience
            setExperiences={setExperiences}
            experiences={experiences}
          />
          {experiences.length > 0 && (
            <Experiences experiencesData={experiences} />
          )}
          <View style={styles.pageViewContainer}>
            <View style={styles.pageViewEmpty} />
            <View style={styles.pageViewEmpty} />
            <View style={styles.pageViewFill} />
          </View>
          <Button
            title={t("next")}
            buttonStyle={styles.button}
            onPress={navigateToNextScreen}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
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
};

export default OnboardingScreen3;
