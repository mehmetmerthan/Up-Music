import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
export default function FilterComponet() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Text>{selectedCountry}</Text>
          <Chip
            buttonStyle={styles.chip}
            title={"Country"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Text>{selectedCity}</Text>
          <Chip
            buttonStyle={styles.chip}
            title={"City"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Text>{roleTags}</Text>
          <Chip
            buttonStyle={styles.chip}
            title={"Role"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Text>{styleTags}</Text>
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
      <FilterComponetChildren />
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
  buttonPropertySave: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#008000",
  },
  buttonPropertyCancel: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#ff0000",
    marginLeft: 20,
  },
});
