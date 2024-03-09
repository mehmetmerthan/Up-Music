import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "../../Styles/Create/CreateStyle";
import { useNavigation } from "@react-navigation/native";
import TouchableScale from "react-native-touchable-scale";
import { useTranslation } from "react-i18next";
const CreateScreen = () => {
  const { t } = useTranslation();
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
          <Text style={styles.decsriptionText}>{t("createStage")}</Text>
          <Text style={styles.decsriptionText}>
            {t("createStageDescription")}
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
          <Text style={styles.decsriptionText}>{t("createEvent")}</Text>
          <Text style={styles.decsriptionText}>
            {t("createEventDescription")}
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
          <Text style={styles.decsriptionText}>{t("createBand")}</Text>
          <Text style={styles.decsriptionText}>
            {t("createBandDescription")}
          </Text>
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
          <Text style={styles.decsriptionText}>{t("createMusician")}</Text>
          <Text style={styles.decsriptionText}>
            {" "}
            {t("createMusicianDescription")}
          </Text>
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
            {t("createMusicianForCollaborate")}
          </Text>
          <Text style={styles.decsriptionText}>
            {t("createMusicianForCollaborateDescription")}
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
          <Text style={styles.decsriptionText}>{t("createVisualArtist")}</Text>
          <Text style={styles.decsriptionText}>
            {t("createVisualArtistDescription")}
          </Text>
        </TouchableScale>
      </View>
    </ScrollView>
  );
};
export default CreateScreen;
