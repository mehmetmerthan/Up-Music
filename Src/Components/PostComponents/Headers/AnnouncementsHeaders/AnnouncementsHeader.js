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
            title={t("musician")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsMusiciansStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("band")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsBandsScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("stage")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsStagesScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("visualArtist")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsVisualArtistsScreen");
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
