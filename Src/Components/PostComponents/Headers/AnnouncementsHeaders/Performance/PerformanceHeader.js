import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function PerformanceHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={"Performance"}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Instrumentalist"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsInstrumentalistScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Singer"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsSingerScreen");
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
