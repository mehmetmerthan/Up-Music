import { View, StyleSheet, Text } from "react-native";
import { React, useState } from "react";
import { CheckBox, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function VenueSelectionScreen() {
  const { t } = useTranslation();
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
      <Text style={styles.headerText}>{t("selectAccountType")}</Text>
      <View style={styles.checkBoxGroup}>
        <CheckBox
          checked={checkedCompany}
          onPress={handleCompany}
          title={"Company"}
          containerStyle={styles.checkBoxContainer}
          size={30}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
        <Text style={styles.descriptionText}>{t("companyExample")}</Text>
        <Divider
          width={1}
          style={{ marginVertical: 5 }}
          inset={true}
          insetType="middle"
        />
        <CheckBox
          checked={checkedVenue}
          onPress={handleVenue}
          title={t("venue")}
          containerStyle={styles.checkBoxContainer}
          size={30}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
        <Text style={styles.descriptionText}>{t("venueExample")}</Text>
        <Divider
          width={1}
          style={{ marginVertical: 5 }}
          inset={true}
          insetType="middle"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
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
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  headerText: {
    marginBottom: 50,
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    color: "#5a5a5aff",
  },
});
