import { View, StyleSheet, Text } from "react-native";
import { React, useState } from "react";
import { CheckBox, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
export default function VenueSelectionScreen() {
  const [checkedCompany, setCheckedCompany] = useState(false);
  const [checkedVenue, setCheckedVenue] = useState(false);
  const navigation = useNavigation();
  function handleCompany() {
    setCheckedCompany(!checkedCompany);
    setCheckedVenue(false);
    navigation.navigate("CompanyGetDetailsScreen");
    setTimeout(() => {
      setCheckedCompany(false);
      setCheckedVenue(false);
    }, 1000);
  }
  function handleVenue() {
    setCheckedVenue(!checkedVenue);
    setCheckedCompany(false);
    navigation.navigate("VenueGetDetailsScreen");
    setTimeout(() => {
      setCheckedCompany(false);
      setCheckedVenue(false);
    }, 1000);
  }
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxGroup}>
        <Text style={styles.descriptionText}>
          Music companies, Record Labels, etc.
        </Text>
        <CheckBox
          checked={checkedCompany}
          onPress={handleCompany}
          title={"Company"}
          containerStyle={styles.checkBoxContainer}
          size={40}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
        <Divider width={1} style={{ marginVertical: 50 }} />
        <Text style={styles.descriptionText}>
          Venue owner, Event organizer, etc.
        </Text>
        <CheckBox
          checked={checkedVenue}
          onPress={handleVenue}
          title={"Venue"}
          containerStyle={styles.checkBoxContainer}
          size={40}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  checkBoxGroup: {
    flexDirection: "column",
  },
  checkBoxContainer: {
    borderRadius: 10,
    backgroundColor: "#e76f12",
    marginTop: 20,
  },
  checkBox: {},
  checkBoxText: {
    color: "#ebebeb",
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});
