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
            title={"Productors"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Artists"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Musicians"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Clip Makers"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Graphic Makers"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("");
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
