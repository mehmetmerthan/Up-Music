import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("ProfilesStack")}
      >
        <Image
          source={require("../../.../../../assets/images/Home/Profiles.jpg")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("CompaniesScreen")}
      >
        <Image
          source={require("../../.../../../assets/images/Home/Companies.png")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("StagesScreen")}
      >
        <Image
          source={require("../../../assets/images/Home/Stages.jpg")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("EventsScreen")}
      >
        <Image
          source={require("../../../assets/images/Home/Events.jpg")}
          style={styles.image}
        />
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("AnnouncementsStack")}
      >
        <Image
          source={require("../../../assets/images/Home/Announcements.jpg")}
          style={styles.image}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  section: {
    height: 150,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  sectionText: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#464646",
    letterSpacing: 1,
  },
});

export default HomeScreen;
