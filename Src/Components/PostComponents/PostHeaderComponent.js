import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
export default function PostHeaderComponent({ filter }) {
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
                filter?.or?.push({ post_type: { eq: "musician_post" } });
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Bands"}
            size="lg"
            onPress={() => {
              {
                filter?.or?.push({ post_type: { eq: "group_post" } });
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
                filter.or.filter((item) => !("post_type" in item));
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
    width: 100,
  },
});
