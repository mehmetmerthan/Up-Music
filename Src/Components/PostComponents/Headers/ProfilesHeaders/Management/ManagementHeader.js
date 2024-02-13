import { Chip } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function ManagementHeader() {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.chipContainer}>
          <Chip
            type="outline"
            containerStyle={styles.chip}
            title={"Management"}
            size="lg"
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Manager"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("ManagerScreen");
              }
            }}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Publicist"}
            size="lg"
            onPress={() => {
              {
                navigation.navigate("PublicistScreen");
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
