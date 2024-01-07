import { React, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../Components/TagComponents/Tag";
import { styleTagData } from "../../../data/TagData";
import styles from "../../Styles/OnBoardingStyle";
const OnboardingScreen2 = () => {
  const navigation = useNavigation();
  const [selectedTags, setSelectedTags] = useState([]);
  const [isLoadingLeft, setIsLoadingLeft] = useState(false);
  const [isLoadingRight, setIsLoadingRight] = useState(false);
  function navigateToNextScreen() {
    setIsLoadingRight(true);
    navigation.navigate("OnboardingScreen3", {
      selectedStyleTags: selectedTags,
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
      <Text style={styles.headerText}>Select you music styles</Text>
      <Tag
        tagData={styleTagData}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
        <View style={styles.pageViewEmpty} />
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

export default OnboardingScreen2;
