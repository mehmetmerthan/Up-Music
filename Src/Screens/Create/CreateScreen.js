import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "../../Styles/Create/CreateStyle";
import { useNavigation } from "@react-navigation/native";
import TouchableScale from "react-native-touchable-scale";
const CreateScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <TouchableScale
          friction={90}
          tension={100}
          activeScale={0.95}
          style={styles.column}
          onPress={() => navigation.navigate("CreateStageScreen")}
        >
          <Image
            source={require("../../../assets/images/Create/create-stage.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for musicians for the stage ?
          </Text>
          <Text style={styles.decsriptionText}>
            (For event organizers and venue owners)
          </Text>
        </TouchableScale>
        <TouchableScale
          friction={90}
          tension={100}
          activeScale={0.95}
          style={styles.column}
          onPress={() => navigation.navigate("CreateEventScreen")}
        >
          <Image
            source={require("../../../assets/images/Create/create-event.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Want to create a new event ?
          </Text>
          <Text style={styles.decsriptionText}>
            (Festivals, concerts, party, etc.)
          </Text>
        </TouchableScale>
      </View>
      <View style={styles.row}>
        <TouchableScale
          friction={90}
          tension={100}
          activeScale={0.95}
          style={styles.column}
          onPress={() => navigation.navigate("CreateBandForMusicianScreen")}
        >
          <Image
            source={require("../../../assets/images/Create/group-search-notice.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for musicians for your band?
          </Text>
          <Text style={styles.decsriptionText}>(For bands)</Text>
        </TouchableScale>
        <TouchableScale
          friction={90}
          tension={100}
          activeScale={0.95}
          style={styles.column}
          onPress={() => navigation.navigate("CreateMusicianForBandScreen")}
        >
          <Image
            source={require("../../../assets/images/Create/musician-search-notice.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for a band to join ?
          </Text>
          <Text style={styles.decsriptionText}>(For musicians)</Text>
        </TouchableScale>
      </View>
      <View style={styles.row}>
        <TouchableScale
          friction={90}
          tension={100}
          activeScale={0.95}
          style={styles.column}
          onPress={() =>
            navigation.navigate("CreateMusicianForCollaborateScreen")
          }
        >
          <Image
            source={require("../../../assets/images/Create/create-stage.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for a musician to collaborate with ?
          </Text>
          <Text style={styles.decsriptionText}>
            (Agreement, collaborations, helping)
          </Text>
        </TouchableScale>
        <TouchableScale
          friction={90}
          tension={100}
          activeScale={0.95}
          style={styles.column}
          onPress={() => navigation.navigate("CreateVisualArtistScreen")}
        >
          <Image
            source={require("../../../assets/images/Create/create-job-notice.png")}
            style={styles.icon}
          />
          <Text style={styles.decsriptionText}>
            Looking for a visual artist ?
          </Text>
          <Text style={styles.decsriptionText}>
            (Photographer, director, graphicer, etc. )
          </Text>
        </TouchableScale>
      </View>
    </ScrollView>
  );
};
export default CreateScreen;
