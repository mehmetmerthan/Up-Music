import { React, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Tag from "../../../../Components/Tag";
import StyleTags from "../../../../../Constants/Data/StyleTags";
import RoleTags from "../../../../../Constants/Data/RoleTags";
import styles from "../../../../Styles/OnBoardingStyle";
import { Divider } from "@rneui/themed";
const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function navigateToNextScreen() {
    setIsLoading(true);
    navigation.navigate("OnboardingScreen2", {
      selectedStyleTags: selectedStyleTags,
      selectedRoleTags: selectedRoleTags,
    });
    setIsLoading(false);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subText}>Select you music styles</Text>
        <Tag
          tagData={StyleTags}
          selectedTags={selectedStyleTags}
          setSelectedTags={setSelectedStyleTags}
        />
        <Divider />
        <Text style={styles.subText}>Select you roles</Text>
        <Tag
          tagData={RoleTags}
          selectedTags={selectedRoleTags}
          setSelectedTags={setSelectedRoleTags}
        />
        <View style={styles.pageViewContainer}>
          <View style={styles.pageViewFill} />
          <View style={styles.pageViewEmpty} />
          <View style={styles.pageViewEmpty} />
        </View>
        <Button
          title="Next"
          onPress={navigateToNextScreen}
          buttonStyle={styles.button}
          loading={isLoading}
        />
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen1;
