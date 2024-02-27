import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../../Styles/Picker/LocationPickerStyle";
import { GOOGLE_PLACES_API_KEY } from "../../../Constants/Keys/API_KEY";
export function LocationPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  const [visible, setVisible] = useState(false);
  function handleLocationSelect(data) {
    const num = data.terms.length;
    const newLocation = {
      city: data?.terms[num - 2]?.value,
      country: data?.terms[num - 1]?.value,
      place: data?.structured_formatting?.main_text,
    };
    setLocation(newLocation);
    console.log(newLocation);
    setVisible(true);
  }
  function locationSave() {
    setSelectedLocation(location);
    setVisible(false);
  }
  function locationCancel() {
    setLocation({});
    setSelectedLocation({});
    setVisible(false);
  }
  return (
    <View style={styles.containerPlace}>
      {location && (
        <Text style={styles.baseText}>
          {location?.place}, {location?.city}, {location?.country}
        </Text>
      )}
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.locationInputPlace }}
        placeholder="Hard Rock Cafe, London"
        fetchDetails={false}
        onPress={(data = null) => handleLocationSelect(data)}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: "en",
          types: "establishment",
        }}
      />
      {visible && (
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

export function CountryPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  const [visible, setVisible] = useState(false);
  function handleLocationSelect(data) {
    console.log(data);
    setLocation(data?.description);
    setVisible(true);
  }
  function locationSave() {
    setSelectedLocation(location);
    setVisible(false);
  }
  function locationCancel() {
    setLocation(null);
    setSelectedLocation(null);
    setVisible(false);
  }
  return (
    <View style={styles.container}>
      {location && <Text style={styles.baseText}>{location}</Text>}
      <>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.locationInput }}
          placeholder="Search a Country"
          fetchDetails={true}
          onPress={(data = null) => handleLocationSelect(data)}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: "en",
            types: "(regions)",
          }}
        />
        {visible && (
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
      </>
    </View>
  );
}
export function CityPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  const [visible, setVisible] = useState(false);
  function handleLocationSelect(data) {
    setLocation(data?.structured_formatting);
    setVisible(true);
  }
  function locationSave() {
    const locationTemp = {
      city: location?.main_text,
      country: location?.secondary_text,
    };
    setSelectedLocation(locationTemp);
    setVisible(false);
  }
  function locationCancel() {
    setLocation(null);
    setSelectedLocation(null);
    setVisible(false);
  }
  return (
    <View style={styles.container}>
      {location && (
        <Text style={styles.baseText}>
          {location?.main_text} {location?.main_text && ","}{" "}
          {location?.secondary_text}
        </Text>
      )}
      <>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.locationInput }}
          placeholder="Search a City"
          fetchDetails={true}
          onPress={(data = null) => handleLocationSelect(data)}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: "en",
            types: "(cities)",
          }}
        />
        {visible && (
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
      </>
    </View>
  );
}
