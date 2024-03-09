import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function PerformanceHeader() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={t("performance")}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("dj")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("DjScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("singer")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("SingerScreen");
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
