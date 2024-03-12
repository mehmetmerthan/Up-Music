import { View, StyleSheet, Text } from "react-native";
import { React, useState } from "react";
import { CheckBox, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function SelectionScreen() {
  const { t } = useTranslation();
  const [checkedPersonal, setCheckedPersonal] = useState(false);
  const [checkedEnterprise, setCheckedEnterprise] = useState(false);
  const navigation = useNavigation();
  function handlePersonal() {
    setCheckedPersonal(!checkedPersonal);
    setCheckedEnterprise(false);
    navigation.navigate("OnboardingScreen1");
    setTimeout(() => {
      setCheckedPersonal(false);
      setCheckedEnterprise(false);
    }, 1000);
  }
  function handleEnterprise() {
    setCheckedEnterprise(!checkedEnterprise);
    setCheckedPersonal(false);
    navigation.navigate("EnterpriseSelectionScreen");
    setTimeout(() => {
      setCheckedPersonal(false);
      setCheckedEnterprise(false);
    }, 1000);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{t("selectAccountType")}</Text>
      <View style={styles.checkBoxGroup}>
        <CheckBox
          checked={checkedPersonal}
          onPress={handlePersonal}
          title={t("personal")}
          containerStyle={styles.checkBoxContainer}
          size={30}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
        <Text style={styles.descriptionText}>{t("personalExample")}</Text>
        <Divider
          width={1}
          style={{ marginVertical: 5 }}
          inset={true}
          insetType="middle"
        />

        <CheckBox
          checked={checkedEnterprise}
          onPress={handleEnterprise}
          title={t("enterprise")}
          containerStyle={styles.checkBoxContainer}
          size={30}
          style={styles.checkBox}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
        />
        <Text style={styles.descriptionText}>{t("enterpriseExample")}</Text>
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
