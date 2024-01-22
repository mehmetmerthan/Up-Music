import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function PostHeaderComponent({ setFilter }) {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            buttonStyle={styles.chip}
            title={"Musicians"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Bands"}
            size="lg"
            onPress={() => {
              {
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Events"}
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
      <Ionicons
        name="filter"
        size={24}
        style={styles.headerRight}
        color="black"
        onPress={() => {
          {
            navigation.navigate("FilterScreen");
          }
        }}
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
  headerRight: {
    marginRight: 16,
    alignSelf: "flex-end",
  },
});
function HeaderRight() {
  return (
    <Ionicons
      name="filter"
      size={24}
      style={styles.headerRight}
      color="black"
      onPress={() => {
        {
        }
      }}
    />
  );
}
