import { Chip } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function SingerHeader() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <View style={styles.chipContainer}>
      <Chip
        type="outline"
        containerStyle={styles.chip}
        title={t("reset")}
        size="lg"
        onPress={() => {
          {
            navigation.navigate("PerformanceScreen");
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 10,
    width: 100,
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
});
