import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Button,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import UITag from "../../Components/tag";
import MediaPicker from "../../Components/MediaPicker";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Modal, Dialog, PanningProvider } from "react-native-ui-lib";
export default function CreateEventScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(true);
  const [location, setLocation] = useState("");
  function submitPost() {
    setLoading(!isLoading);
  }
  function visible() {
    setVisible(!isVisible);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <MediaPicker />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <TouchableOpacity onPress={visible}>
          <View style={styles.containerTouchable}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.TextTouchable}>Select event location</Text>
          </View>
        </TouchableOpacity>
        <Dialog
          visible={isVisible}
          onDismiss={() => setVisible(!isVisible)}
          panDirection={PanningProvider.Directions.DOWN}
        >
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Search Location</Text>
            <GooglePlacesAutocomplete
              styles={{ textInput: styles.locationInput }}
              placeholder="Hard Rock Cafe, London"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                setLocation(data.description);
                setVisible(!isVisible);
              }}
              query={{
                key: "AIzaSyB-SUyU6ODGM7SPEE8m_1I5QIuAmruJBfw",
                language: "en",
              }}
            />
          </View>
        </Dialog>
        <View style={styles.divider} />
        <UITag />
        <TouchableOpacity style={styles.button} onPress={submitPost}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.text}>Share</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
