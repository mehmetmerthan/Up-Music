import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../../Styles/Picker/LocationPickerStyle";
export function LocationPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  const [visible, setVisible] = useState(false);
  function handleLocationSelect(data) {
    const newLocation = {
      city: data?.structured_formatting?.main_text,
      country: data?.structured_formatting?.secondary_text,
    };
    setLocation(newLocation);
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
    <View style={styles.container}>
      <Text style={styles.baseText}>
        {location?.city} {location?.city && ","} {location?.country}
      </Text>
      {visible ? (
        <>
          <GooglePlacesAutocomplete
            styles={{ textInput: styles.locationInput }}
            placeholder="Hard Rock Cafe, London"
            fetchDetails={true}
            onPress={(data = null) => handleLocationSelect(data)}
            query={{
              key: "AIzaSyB-SUyU6ODGM7SPEE8m_1I5QIuAmruJBfw",
              language: "en",
              types: "(cities)",
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
        </>
      ) : (
        <Button
          buttonStyle={styles.button}
          onPress={() => setVisible(true)}
          title="Change location"
        />
      )}
    </View>
  );
}

export function CountryPicker({ setSelectedLocation, setVisibleCountry }) {
  const [location, setLocation] = useState(null);
  function handleLocationSelect(data) {
    setLocation(data?.description);
  }
  function locationSave() {
    setSelectedLocation(location);
    setVisibleCountry(false);
  }
  function locationCancel() {
    setLocation({});
    setSelectedLocation({});
    setVisibleCountry(false);
  }
  return (
    <View>
      <Text style={styles.baseText}>
        {location?.city} {location?.city && ","} {location?.country}
      </Text>

      <>
        <GooglePlacesAutocomplete
          styles={{ textInput: styles.locationInput }}
          placeholder="Search a Country"
          fetchDetails={true}
          onPress={(data = null) => handleLocationSelect(data)}
          query={{
            key: "AIzaSyB-SUyU6ODGM7SPEE8m_1I5QIuAmruJBfw",
            language: "en",
            types: "(regions)",
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
    setLocation({});
    setSelectedLocation({});
    setVisible(false);
  }
  return (
    <View>
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
            key: "AIzaSyB-SUyU6ODGM7SPEE8m_1I5QIuAmruJBfw",
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
