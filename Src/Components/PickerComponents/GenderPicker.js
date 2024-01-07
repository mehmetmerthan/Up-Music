import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Chip } from "@rneui/themed";
import { useState } from "react";

export default function GenderPicker({ selectedGender, setSelectedGender }) {
  const [visibleGender, setVisibleGender] = useState(false);
  return (
    <View>
      <Text style={styles.baseText}>{selectedGender}</Text>
      {visibleGender && (
        <View style={styles.chipListContainer}>
          <Chip
            title={"male"}
            titleStyle={styles.title}
            buttonStyle={styles.chipButton}
            type="outline"
            containerStyle={styles.chipContainer}
            style={styles.chipStyle}
            onPress={() => {
              setVisibleGender(false);
              setSelectedGender("Male");
            }}
          />
          <Chip
            title={"female"}
            titleStyle={styles.title}
            buttonStyle={styles.chipButton}
            type="outline"
            containerStyle={styles.chipContainer}
            style={styles.chipStyle}
            onPress={() => {
              setVisibleGender(false);
              setSelectedGender("Female");
            }}
          />
          <Chip
            title={"other"}
            titleStyle={styles.title}
            buttonStyle={styles.chipButton}
            type="outline"
            containerStyle={styles.chipContainer}
            style={styles.chipStyle}
            onPress={() => {
              setVisibleGender(false);
              setSelectedGender("Other");
            }}
          />
        </View>
      )}

      {!visibleGender && (
        <Button
          buttonStyle={styles.button}
          onPress={() => setVisibleGender(true)}
          title="Change gender"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#7b7b7bff",
    alignSelf: "center",
    marginBottom: 10,
  },
  chipListContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  chipContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  chipStyle: {
    backgroundColor: "#ccc",
  },
  title: {
    color: "#3c3c3c",
    fontSize: 12,
  },
  chipButton: {
    borderColor: "#000000",
  },
  button: {
    borderRadius: 10,
    alignSelf: "center",
    width: "50%",
    marginBottom: 20,
  },
});
