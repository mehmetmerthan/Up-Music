import { Chip } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function GraphicerHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.chipContainer}>
      <Chip
        type="outline"
        containerStyle={styles.chip}
        title={"Reset"}
        size="lg"
        onPress={() => {
          {
            navigation.navigate("AnnouncementsVisualScreen");
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
