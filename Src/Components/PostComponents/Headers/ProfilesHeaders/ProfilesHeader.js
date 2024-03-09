import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function UserProfileHeaderHeader() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            buttonStyle={styles.chip}
            title={t("performance")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("PerformanceStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("instrumentalist")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("InstrumentalistScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("producer")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("ProducersStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("visual")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("VisualStack");
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  chip: {
    marginHorizontal: 10,
  },
});
