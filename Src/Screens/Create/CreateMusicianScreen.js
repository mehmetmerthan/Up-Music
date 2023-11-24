import {
  TextInput,
  Text,
  View,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import UITag from "../../Components/tag";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MusicianTag from "../../Components/MusicianTag";
import { Dialog, Divider, Button } from "@rneui/themed";
export default function CreateMusicianScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isLocationDialogVisible, setLocationDialogVisible] = useState(false);
  const [isPartipicantsDialogVisible, setPartipicantsDialogVisible] =
    useState(false);
  const [location, setLocation] = useState("");
  function submitPost() {
    setLoading(!isLoading);
  }
  function locationDialogVisible() {
    setLocationDialogVisible(!isLocationDialogVisible);
  }
  function partipicantsDialogVisible() {
    setPartipicantsDialogVisible(!isPartipicantsDialogVisible);
  }
  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>Tell about yourself</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="I am a musician..."
          value={text}
        />
        <Divider orientation="vertical" style={{borderWidth:0.5}}/>
        <Text style={styles.header}>Select your location</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
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
          onPress={locationDialogVisible}
        />
        <Divider orientation="vertical" style={{borderWidth:0.5}}/>
        <Dialog
          isVisible={isLocationDialogVisible}
          onBackdropPress={() =>
            setLocationDialogVisible(!isLocationDialogVisible)
          }
          onDismiss={() => setLocationDialogVisible(!isLocationDialogVisible)}
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
        <Text style={styles.header}>What kind of musician are you ?</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <MusicianTag />
        <Divider orientation="vertical" style={{borderWidth:0.5}} />
        <Text style={styles.header}>Select music styles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <UITag />
        <Divider orientation="vertical" />
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
