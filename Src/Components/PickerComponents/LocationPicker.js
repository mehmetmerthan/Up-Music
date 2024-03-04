import { React, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";
import styles from "../../Styles/Picker/LocationPickerStyle";
import { GOOGLE_PLACES_API_KEY } from "../../../Constants/Keys/API_KEY";
export function LocationPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  function handleLocationSelect(data) {
    const num = data.terms.length;
    const newLocation = {
      city: data?.terms[num - 2]?.value,
      country: data?.terms[num - 1]?.value,
      place: data?.structured_formatting?.main_text,
    };
    setLocation(newLocation);
    setSelectedLocation(newLocation);
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
    </View>
  );
}

export function CountryPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  function handleLocationSelect(data) {
    setLocation(data?.description);
    setSelectedLocation(data?.description);
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
      </>
    </View>
  );
}
export function CityPicker({ setSelectedLocation }) {
  const [location, setLocation] = useState(null);
  async function handleLocationSelect(data) {
    const num = data.terms.length;
    const newLocation = {
      city: data?.terms[num - 2]?.value,
      country: data?.terms[num - 1]?.value,
    };
    setLocation(newLocation);
    setSelectedLocation(newLocation);
    console.log(newLocation);
    console.log(location);
  }
  return (
    <View style={styles.container}>
      {location && (
        <Text style={styles.baseText}>
          {location?.city} {location?.city && ","} {location?.country}
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
      </>
    </View>
  );
}
