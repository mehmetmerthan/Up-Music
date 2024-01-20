import { Chip, Button } from "@rneui/themed";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function PostHeaderComponent({ setFilter }) {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            buttonStyle={styles.chip}
            title={"Country"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"City"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Role"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Chip
            containerStyle={styles.chip}
            title={"Style"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={"Reset"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
        </View>
      </ScrollView>
      <Button
        title={"Filter"}
        onPress={() => navigation.navigate("FilterScreen", { setFilter })}
      />
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
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
