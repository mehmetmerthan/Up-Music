import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function VisualHeader() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={t("visual")}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("director")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("DirectorScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("editor")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("EditorScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("graphicer")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("GraphicerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("photographer")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("PhotographerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={t("videography")}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("VideographyScreen");
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
