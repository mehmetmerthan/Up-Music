import { React, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../Components/TagComponents/Tag";
import { roleData } from "../../../data/TagData";
import styles from "../../Styles/OnBoardingStyle";
import { Button } from "@rneui/themed";
const OnboardingScreen3 = ({ route }) => {
  const { selectedStyleTags = [] } = route?.params || {};
  const navigation = useNavigation();
  const [selectedTags, setSelectedTags] = useState([]);
  const [isLoadingLeft, setIsLoadingLeft] = useState(false);
  const [isLoadingRight, setIsLoadingRight] = useState(false);
  function navigateToNextScreen() {
    setIsLoadingRight(true);
    navigation.navigate("OnboardingScreen4", {
      selectedStyleTags,
      selectedRoleTags: selectedTags,
    });
    setIsLoadingRight(false);
  }
  function goBack() {
    setIsLoadingLeft(true);
    navigation.goBack();
    setIsLoadingLeft(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select you roles</Text>
      <Tag
        tagData={roleData}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          onPress={goBack}
          buttonStyle={styles.buttonLeft}
          type="outline"
          loading={isLoadingLeft}
        />
        <Button
          title="Next"
          onPress={navigateToNextScreen}
          buttonStyle={styles.buttonRight}
          loading={isLoadingRight}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen3;
