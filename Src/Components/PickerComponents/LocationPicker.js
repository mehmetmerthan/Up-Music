import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";
import styles from "../../Styles/Picker/LocationPickerStyle";
export default function LocationPicker({
  setSelectedLocation,
  setVisibleLocation,
}) {
  const [location, setLocation] = useState(null);
  function handleLocationSelect(data) {
    const newLocation = {
      city: data?.structured_formatting?.main_text,
      country: data?.structured_formatting?.secondary_text,
    };
    setLocation(newLocation);
  }
  function locationSave() {
    setSelectedLocation(location);
    setVisibleLocation(false);
  }
  function locationCancel() {
    setSelectedLocation({});
    setVisibleLocation(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        {location?.city} {location?.city && ","} {location?.country}
      </Text>
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
      {location && (
        <View style={styles.buttonContainer}>
          <Button
            title={"Save"}
            buttonStyle={styles.buttonPropertySave}
            onPress={locationSave}
          />
          <Button
            title={"Cancel"}
            buttonStyle={styles.buttonPropertyCancel}
            onPress={locationCancel}
          />
        </View>
      )}
    </View>
  );
}
