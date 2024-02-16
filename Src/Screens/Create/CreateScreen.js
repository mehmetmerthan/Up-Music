import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "../../Styles/Create/CreateStyle";
import { useNavigation } from "@react-navigation/native";
const CreateScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateStageScreen")}
        >
          <Image
            source={require("../../../assets/create-stage.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for musicians for the stage ?
          </Text>
          <Text style={styles.decsriptionText}>
            (For event organizers and venue owners)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateEventScreen")}
        >
          <Image
            source={require("../../../assets/create-event.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Want to create a new event ?
          </Text>
          <Text style={styles.decsriptionText}>
            (Festivals, concerts, party, etc.)
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateGroupScreen")}
        >
          <Image
            source={require("../../../assets/group-search-notice.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for musicians for your band?
          </Text>
          <Text style={styles.decsriptionText}>(For bands)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateMusicianScreen")}
        >
          <Image
            source={require("../../../assets/musician-search-notice.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for a band to join ?
          </Text>
          <Text style={styles.decsriptionText}>(For musicians)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("")}
        >
          <Image
            source={require("../../../assets/create-stage.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for a musician to collaborate with ?
          </Text>
          <Text style={styles.decsriptionText}>
            (Agreement, collaborations, helping)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("")}
        >
          <Image
            source={require("../../../assets/create-job-notice.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>Looking for a artist ?</Text>
          <Text style={styles.decsriptionText}>
            (Photographer, director, graphicer, etc. )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CreateScreen;
