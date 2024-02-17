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
      <Text style={styles.sectionText}>Profiles</Text>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("ProfilesStack")}
      >
        <Image
          source={require("../../.../../../assets/Producers.png")}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.sectionText}>Companies</Text>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("CompaniesScreen")}
      >
        <Image
          source={require("../../.../../../assets/Producers.png")}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.sectionText}>Stages</Text>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("StagesScreen")}
      >
        <Image
          source={require("../../../assets/Stage.png")}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.sectionText}>Events</Text>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("EventsScreen")}
      >
        <Image
          source={require("../../../assets/Events.png")}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.sectionText}>Announcements</Text>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("AnnouncementsStack")}
      >
        <Image
          source={require("../../../assets/Bands.png")}
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
