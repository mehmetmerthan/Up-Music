import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
export default function ex() {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("welcome")}</Text>
      <Button title={t("buttonText")} onPress={changeLanguage} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
