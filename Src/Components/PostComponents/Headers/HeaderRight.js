import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
export default function HeaderRight({ screenName }) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <Ionicons
      name={t("filter")}
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
          navigation.navigate(screenName);
        }
      }}
    />
  );
}
const styles = StyleSheet.create({
  headerRight: {
    marginRight: 20,
  },
});
