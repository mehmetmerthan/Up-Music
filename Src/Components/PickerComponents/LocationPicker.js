import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import styles from "../../Styles/Picker/LocationPickerStyle";
import {
  useNavigation,
  useRoute,
  useNavigationState,
} from "@react-navigation/native";
export default function LocationPicker() {
  const route = useRoute();
  const { userData } = route?.params || {};
  const previusScreenName = useNavigationState(
    (state) => state.routeNames[state.index - 1]
  );
  const navigation = useNavigation();
  function handleLocationSelect(data) {
    const newLocation = {
      city: data?.structured_formatting?.main_text,
      country: data?.structured_formatting?.secondary_text,
    };
    if (userData.location) {
      userData.location = newLocation;
    }
  }
  function navigateToBackScreen() {
    navigation.navigate(previusScreenName, { userData });
  }
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.locationInput }}
        placeholder="Hard Rock Cafe, London"
        fetchDetails={true}
        onPress={(data, details = null) => handleLocationSelect(data)}
        query={{
          key: "AIzaSyB-SUyU6ODGM7SPEE8m_1I5QIuAmruJBfw",
          language: "en",
        }}
      />
      <Button
        title="Save"
        onPress={navigateToBackScreen}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}
