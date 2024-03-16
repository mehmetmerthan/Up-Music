import { React } from "react";
import { Image, StyleSheet, Pressable, ScrollView, Text } from "react-native";
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
          source={require("../../.../../../assets/images/Home/profiles.png")}
          style={styles.image}
        />
        <Text style={styles.overlayText}>Profiles</Text>
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("CompaniesScreen")}
      >
        <Image
          source={require("../../.../../../assets/images/Home/companies.png")}
          style={styles.image}
        />
        <Text style={styles.overlayText}>Companies</Text>
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("StagesScreen")}
      >
        <Image
          source={require("../../../assets/images/Home/stages.png")}
          style={styles.image}
        />
        <Text style={styles.overlayText}>Stages</Text>
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("EventsScreen")}
      >
        <Image
          source={require("../../../assets/images/Home/events.png")}
          style={styles.image}
        />
        <Text style={styles.overlayText}>Events</Text>
      </Pressable>
      <Pressable
        style={styles.section}
        onPress={() => navigation.navigate("AnnouncementsStack")}
      >
        <Image
          source={require("../../../assets/images/Home/ann.png")}
          style={styles.image}
        />
        <Text style={styles.overlayText}>Announcements</Text>
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
  overlayText: {
    position: "absolute",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    letterSpacing: 1,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 1)",
    padding: 5,
  },
});

export default HomeScreen;
