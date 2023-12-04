import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dialog, Button } from "@rneui/themed";
import styles from "../../Styles/Picker/LocatipnPickerStyle";
const useLocation = () => {
  const [location, setLocation] = useState("");
  const [isVisible, setVisible] = useState(false);
  function visible() {
    setVisible(!isVisible);
  }
  function handleLocationSelect(data) {
    console.log(data);
    setLocation(data.description);
    setVisible(false);
  };
  function LocationPicker() {
    return (
      <View >
        <Button
          title="Select location"
          buttonStyle={styles.buttonStyle}
          type="outline"
          titleStyle={styles.titleStyle}
          containerStyle={styles.buttonContainer}
          icon={<Ionicons name="location-outline" size={24} color="black" />}
          onPress={visible}
        />
        <Dialog
          isVisible={isVisible}
        onBackdropPress={() => setVisible(!isVisible)}
        >
          <View style={styles.locationContainer}>
            <Dialog.Title title="Search Location" />
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
          </View>
        </Dialog>
      </View>
    );
  }
  return { LocationPicker, location };
};

export { useLocation };
