import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
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
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateEventScreen")}
        >
          <Image
            source={require("../../../assets/create-event.png")}
            style={styles.icon}
          />
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
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateMusicianScreen")}
        >
          <Image
            source={require("../../../assets/musician-search-notice.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateStageScreen")}
        >
          <Image
            source={require("../../../assets/create-stage.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateProfScreen")}
        >
          <Image
            source={require("../../../assets/create-job-notice.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
export default CreateScreen;
