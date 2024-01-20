import { React, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import { Button, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles/OnBoardingStyle";
import Tag from "../../Components/Tag";
import { roleData, styleTagData } from "../../../data/TagData";
import SpotifySearch from "../../Components/SpotifySearch";
import Experiences from "../../Components/Experiences";
const OnboardingScreen3 = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedExperienceRoleTags, setSelectedExperienceRoleTags] = useState(
    []
  );
  const [selectedExperienceStyleTags, setSelectedExperienceStyleTags] =
    useState([]);
  const [selectedSong, setSelectedSong] = useState({});
  const [aboutExperience, setAboutExperience] = useState("");
  const [experiencesData, setExperiencesData] = useState([]);
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
      experiencesData,
      image,
    });
    setIsLoading(false);
  }
  function addExperience() {
    const newExperience = {
      about: aboutExperience,
      roles: selectedExperienceRoleTags,
      styles: selectedExperienceStyleTags,
      song: selectedSong,
    };
    setExperiencesData([...experiencesData, newExperience]);
    setAboutExperience("");
    setSelectedExperienceRoleTags([]);
    setSelectedExperienceStyleTags([]);
    setSelectedSong({});
  }
  function renderItem() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Experiences experiencesData={experiencesData} />
          <Text style={styles.subText}>Tell us about your experience</Text>
          <TextInput
            style={styles.input}
            placeholder="About your experience"
            onChangeText={(text) => setAboutExperience(text)}
            value={aboutExperience}
          />
          <Divider />
          <Text style={styles.subText}>Experience in which role?</Text>
          <Tag
            tagData={roleData}
            selectedTags={selectedExperienceRoleTags}
            setSelectedTags={setSelectedExperienceRoleTags}
          />
          <Divider />
          <Text style={styles.subText}>Experience in which style?</Text>
          <Tag
            tagData={styleTagData}
            selectedTags={selectedExperienceStyleTags}
            setSelectedTags={setSelectedExperienceStyleTags}
          />
          <Divider />
          <Text style={styles.subText}>Experience in which song?</Text>
          <SpotifySearch setSelectedSong={setSelectedSong} />
          <Divider />
          <Button
            title={"Add experience"}
            onPress={addExperience}
            buttonStyle={styles.button}
          />
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
