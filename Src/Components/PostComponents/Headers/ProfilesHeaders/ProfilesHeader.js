import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function UserProfileHeaderHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            buttonStyle={styles.chip}
            title={"Performance"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("PerformanceStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Instrumentalist"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("InstrumentalistScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Producers"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("ProducersStack");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Visual"}
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
