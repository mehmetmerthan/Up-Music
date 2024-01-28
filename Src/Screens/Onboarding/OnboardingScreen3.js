import { React, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles/OnBoardingStyle";
import Experiences from "../../Components/Experiences";
import AddExperience from "../../Components/AddExperiences";
const OnboardingScreen3 = ({ route }) => {
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
    navigation.navigate("SignUpScreen", {
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <AddExperience
            setExperiences={setExperiences}
            experiences={experiences}
          />
          <Experiences experiencesData={experiences} />
          <View style={styles.pageViewContainer}>
            <View style={styles.pageViewEmpty} />
            <View style={styles.pageViewEmpty} />
            <View style={styles.pageViewFill} />
          </View>
          <Button
            title={"Next"}
            buttonStyle={styles.button}
            onPress={navigateToNextScreen}
          />
        </View>
      </TouchableWithoutFeedback>
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

export default OnboardingScreen3;
