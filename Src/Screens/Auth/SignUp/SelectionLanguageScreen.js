import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { React } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function SelectionLanguageScreen() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Pressable
          onPress={() => {
            i18n.changeLanguage("en");
            navigation.navigate("SelectionScreen");
          }}
        >
          <Image
            source={require("../../../../assets/images/Flag/uk64.png")}
            style={styles.image}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            i18n.changeLanguage("tr");
            navigation.navigate("SelectionScreen");
          }}
        >
          <Image
            source={require("../../../../assets/images/Flag/tur64.png")}
            style={styles.image}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesContainer: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
