import { View, StyleSheet, Text } from "react-native";
import { React, useState } from "react";
import { CheckBox, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
export default function SelectionScreen() {
  const [checkedPersonal, setCheckedPersonal] = useState(false);
  const [checkedEnterprise, setCheckedEnterprise] = useState(false);
  const navigation = useNavigation();
  function handlePersonal() {
    setCheckedPersonal(!checkedPersonal);
    setCheckedEnterprise(false);
    navigation.navigate("PersonalSignUpScreen");
    setCheckedPersonal(false);
  }
  function handleEnterprise() {
    setCheckedEnterprise(!checkedEnterprise);
    setCheckedPersonal(false);
    navigation.navigate("EnterpriseSelectionScreen");
    setCheckedEnterprise(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxGroup}>
        <Text style={styles.descriptionText}>
          Musicians, Bands, Producers, and more
        </Text>
        <CheckBox
          checked={checkedPersonal}
          onPress={handlePersonal}
          title={"Personal"}
          containerStyle={styles.checkBoxContainer}
          size={40}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
        <Divider width={1} style={{ marginVertical: 50 }} />
        <Text style={styles.descriptionText}>
          Companies, Venue owner, and more
        </Text>
        <CheckBox
          checked={checkedEnterprise}
          onPress={handleEnterprise}
          title={"Enterprise"}
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
