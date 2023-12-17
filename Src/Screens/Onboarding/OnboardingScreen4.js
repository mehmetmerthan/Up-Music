import { React, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/OnBoardingStyle';
import useLocation from '../../Components/PickerComponents/useLocation';
import DropDownPicker from "react-native-dropdown-picker";
const OnboardingScreen4 = ({ route }) => {
  const { selectedStyleTags = [], selectedRoleTags = [] } = route?.params || {};
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "other", value: "other" },
  ]);
  const [text, onChangeText] = useState("");
  const navigation = useNavigation();
  const { LocationPicker, location } = useLocation();
  function navigateToNextScreen() {
    navigation.navigate('OnboardingScreen5', {
      selectedStyleTags,
      selectedRoleTags,
      about: text,
      location,
      gender: value,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tell about yourself ..</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="I am a .."
        value={text}
      />
      <Text style={styles.subText}>What is yoor gender</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={false}
        mode="SIMPLE"
        searchable={false}
      />
      <Text style={styles.subText}>Where are you living?</Text>
      <LocationPicker />
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
        <View style={styles.pageViewEmpty} />
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
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen4;


