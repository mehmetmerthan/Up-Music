import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { KeyboardAvoidingView, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const LocationPicker = () => {
  const [location, setLocation] = useState("");
  const navigation = useNavigation();
  function goBack() {
    navigation.navigate("CreateEventScreen", { location: location });
  }
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setLocation(data.description);
        }}
        query={{
          key: "AIzaSyB-SUyU6ODGM7SPEE8m_1I5QIuAmruJBfw",
          language: "en",
        }}
      />
      <Button title="ok" onPress={goBack} />
    </View>
  );
};

export default LocationPicker;
