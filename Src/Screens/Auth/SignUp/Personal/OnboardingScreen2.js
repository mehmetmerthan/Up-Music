import { React, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { Button, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../../../Styles/OnBoardingStyle";
import { CityPicker } from "../../../../Components/PickerComponents/LocationPicker";
import useMedia from "../../../../Components/PickerComponents/useMedia";
const OnboardingScreen2 = ({ route }) => {
  const { selectedStyleTags = [], selectedRoleTags = [] } = route?.params || {};
  const { MediaPickerImageComponent, image } = useMedia();
  const [selectedLocation, setSelectedLocation] = useState({});
  const [text, onChangeText] = useState("");
  const navigation = useNavigation();
  function navigateToNextScreen() {
    navigation.navigate("OnboardingScreen3", {
      selectedStyleTags,
      selectedRoleTags,
      about: text,
      location: selectedLocation,
      image: image,
    });
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        <Text style={styles.subText}>About?</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="I am a .."
          value={text}
        />
        <Divider />
        <Text style={styles.subText}>Where are you living?</Text>
        <CityPicker setSelectedLocation={setSelectedLocation} />
        <Divider />
        <Text style={styles.subText}>Select a profile picture</Text>
        <MediaPickerImageComponent />
        <View style={styles.pageViewContainer}>
          <View style={styles.pageViewEmpty} />
          <View style={styles.pageViewFill} />
          <View style={styles.pageViewEmpty} />
        </View>
        <Divider />
        <Button
          title={"Next"}
          buttonStyle={styles.button}
          onPress={navigateToNextScreen}
        />
      </View>
    );
  }
  return (
    <FlatList
      decelerationRate={0.8}
      data={[1]}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      keyboardShouldPersistTaps="always"
    />
  );
};

export default OnboardingScreen2;
