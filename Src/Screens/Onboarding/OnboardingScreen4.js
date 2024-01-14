import { React, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles/OnBoardingStyle";
import { CityPicker } from "../../Components/PickerComponents/LocationPicker";
import GenderPicker from "../../Components/PickerComponents/GenderPicker";
const OnboardingScreen4 = ({ route }) => {
  const { selectedStyleTags = [], selectedRoleTags = [] } = route?.params || {};
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({});
  const [visibleCity, setVisibleCity] = useState(false);
  const [text, onChangeText] = useState("");
  const navigation = useNavigation();
  function navigateToNextScreen() {
    navigation.navigate("OnboardingScreen5", {
      selectedStyleTags,
      selectedRoleTags,
      about: text,
      gender: selectedGender,
      location: selectedLocation,
    });
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Tell about yourself ..</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="I am a .."
          value={text}
        />
        <View style={styles.container}>
          <Text style={styles.subText}>Where are you living?</Text>
          {!visibleCity && (
            <Button
              title={"Select Location"}
              onPress={() => setVisibleCity(true)}
            />
          )}
          {visibleCity && (
            <CityPicker
              setSelectedLocation={setSelectedLocation}
              setVisibleCity={setVisibleCity}
            />
          )}
          <View style={styles.genderContainer}>
            <Text style={styles.subText}>What is your gender</Text>
            <GenderPicker
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </View>
        </View>
        <View style={styles.pageViewContainer}>
          <View style={styles.pageViewEmpty} />
          <View style={styles.pageViewEmpty} />
          <View style={styles.pageViewEmpty} />
          <View style={styles.pageViewFill} />
          <View style={styles.pageViewEmpty} />
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
          />
        </View>
      </View>
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

export default OnboardingScreen4;
