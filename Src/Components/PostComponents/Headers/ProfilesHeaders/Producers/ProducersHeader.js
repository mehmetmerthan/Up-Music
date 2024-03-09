import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function ProducersHeader() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={t("producer")}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("beatmaker")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("BeatmakerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("composer")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("ComposerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("mixing")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("MixingScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("songwriter")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("SongwriterScreen");
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
