import {
  TextInput,
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import UITag from "../../Components/tag";
import { Ionicons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MusicianTag from "../../Components/MusicianTag";
import DropDownPicker from "react-native-dropdown-picker";
import { Dialog, Divider, Button } from "@rneui/themed";
const dropdownStyles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
export default function CreateGroupScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isLocationDialogVisible, setLocationDialogVisible] = useState(false);
  const [isPartipicantsDialogVisible, setPartipicantsDialogVisible] =
    useState(false);
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {
      label: "John Doe",
      value: "1",
      icon: () => (
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          style={dropdownStyles.iconStyle}
        />
      ),
    },
    {
      label: "mr watson",
      value: "2",
      icon: () => (
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
          style={dropdownStyles.iconStyle}
        />
      ),
    },
  ]);

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
        <Text style={styles.header}>Write something about the group</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Searching a drummer for a rock band"
          value={text}
        />
        <Divider orientation="vertical" style={{borderWidth:0.5}}/>
        <Text style={styles.header}>Select group location</Text>
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
        <Text style={styles.header}>Select partipicants</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Button
          title="Add partipicants"
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
          icon={<Ionicons name="person-add-outline" size={24} color="black" />}
          onPress={partipicantsDialogVisible}
        />
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
        <Divider orientation="vertical" style={{borderWidth:0.5}}/>
        <Text style={styles.header}>Select the musicians needed</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <MusicianTag />
        <Divider orientation="vertical" style={{borderWidth:0.5}} />
        <Text style={styles.header}>Select music styles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <UITag />
        <Divider orientation="vertical" />

        <Dialog
          isVisible={isPartipicantsDialogVisible}
          onBackdropPress={() =>
            setPartipicantsDialogVisible(!isPartipicantsDialogVisible)
          }
          onDismiss={() =>
            setPartipicantsDialogVisible(!isPartipicantsDialogVisible)
          }
        >
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Add partipicants</Text>
            <View
              style={{
                //backgroundColor: "#171717",
                flex: 1,
                //alignItems: "center",
                //justifyContent: "center",
                paddingHorizontal: 15,
              }}
            >
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                mode="SIMPLE"
                searchable={true}
              />
            </View>
          </View>
        </Dialog>
        <Divider style={{borderWidth:0.5}} orientation="vertical" />
        <Button
          title="Create group"
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
