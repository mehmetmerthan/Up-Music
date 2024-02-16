import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function AnnouncementsStagesHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={"Stages"}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Collaboration"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsCollaborationScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Join Group"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("AnnouncementsJoinGroupScreen");
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
