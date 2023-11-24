import { TextInput, Text, View, ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import UITag from "../../Components/tag";
import MediaPicker from "../../Components/MediaPicker";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Dialog, Divider, Button } from "@rneui/themed";
export default function CreateEventScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [location, setLocation] = useState("");
  function submitPost() {
    setLoading(!isLoading);
  }
  function visible() {
    setVisible(!isVisible);
  }
  return (
    <ScrollView>
      <View>
        <MediaPicker />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Button
          title="Select location"
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          type="outline"
          titleStyle={{ color: "black" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          icon={<Ionicons name="location-outline" size={24} color="black" />}
          onPress={visible}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Dialog
          isVisible={isVisible}
          onBackdropPress={() => setVisible(!isVisible)}
          onDismiss={() => setVisible(!isVisible)}
        >
          <View style={styles.locationContainer}>
            <Dialog.Title title="Search Location" />
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

        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <UITag />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Button
          title="Share"
          loading={false}
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          titleStyle={{ color: "white" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          onPress={submitPost}
        />
      </View>
    </ScrollView>
  );
}
