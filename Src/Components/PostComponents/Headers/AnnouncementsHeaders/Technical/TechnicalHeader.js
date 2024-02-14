import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function ProducersHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={"Technical"}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Sound Engineer"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsSoundEngineerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Technician"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsTechnicianScreen");
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
