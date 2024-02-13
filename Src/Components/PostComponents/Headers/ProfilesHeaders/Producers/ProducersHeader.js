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
            title={"Producers"}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Beatmaker"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("BeatmakerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Composer"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("ComposerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Mixing"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("MixingScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Songwriter"}
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
