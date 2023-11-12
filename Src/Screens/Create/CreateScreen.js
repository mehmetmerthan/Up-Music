import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../../Styles/Create/CreateStyle";
import { useNavigation } from "@react-navigation/native";
const CreateScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreatePostScreen")}
        >
          <MaterialIcons
            name="event"
            color="#ccc"
            size={72}
            style={styles.icon}
          />
          <Text style={styles.text}>Create Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateEventScreen")}
        >
          <MaterialIcons
            name="event"
            color="#ccc"
            size={72}
            style={styles.icon}
          />
          <Text style={styles.text}>Create Event</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateGroupScreen")}
        >
          <MaterialIcons
            name="event"
            color="#ccc"
            size={72}
            style={styles.icon}
          />
          <Text style={styles.text}>Group search notice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateMusicianScreen")}
        >
          <MaterialIcons
            name="event"
            color="#ccc"
            size={72}
            style={styles.icon}
          />
          <Text style={styles.text}>Musician search notice</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateStageScreen")}
        >
          <MaterialIcons
            name="event"
            color="#ccc"
            size={72}
            style={styles.icon}
          />
          <Text style={styles.text}>Create Stage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.column}
          onPress={() => navigation.navigate("CreateJobScreen")}
        >
          <MaterialIcons
            name="event"
            color="#ccc"
            size={72}
            style={styles.icon}
          />
          <Text style={styles.text}>Create job search notice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CreateScreen;
