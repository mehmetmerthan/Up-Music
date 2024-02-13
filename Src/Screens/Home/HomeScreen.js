import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  section: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
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
