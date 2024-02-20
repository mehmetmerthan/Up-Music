import { View, Text, StyleSheet } from "react-native";
import { React } from "react";
import { Avatar, Divider } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
export default function Experiences({
  experiencesData,
  accessory = false,
  onDeleteExperience,
}) {
  return (
    <View style={styles.containerList}>
      <Swiper
        dotColor="#000000"
        activeDotColor="#5cbf51"
        showsPagination={true}
        loop={false}
        style={{ height: 350 }}
      >
        {experiencesData?.map((experience, index) => {
          return (
            <View style={styles.container} key={index}>
              <View style={styles.songContainer}>
                {experience?.song_link && (
                  <Avatar
                    size={52}
                    rounded
                    source={{ uri: experience?.song_link }}
                  />
                )}
                <View style={styles.content}>
                  <Text style={styles.songText}>{experience?.song_name} </Text>
                  <Text style={styles.artistText}>
                    {experience?.song_artist}
                  </Text>
                </View>
                {accessory && (
                  <AntDesign
                    name="closecircleo"
                    size={24}
                    color="black"
                    style={{ marginLeft: "auto" }}
                    onPress={() => onDeleteExperience(index)}
                  />
                )}
              </View>
              <Divider />
              <Text style={styles.aboutText}>{experience?.about}</Text>
              {experience?.tag_roles?.length > 0 && (
                <>
                  <Text style={styles.sub}>Role</Text>
                  <Divider insetType="middle" />
                </>
              )}
              <View style={styles.tagContainer}>
                {experience?.tag_roles?.map((role, index) => {
                  return (
                    <Text key={index} style={styles.tag}>
                      {role}
                    </Text>
                  );
                })}
              </View>
              {experience?.tag_styles?.length > 0 && (
                <>
                  <Text style={styles.sub}>Style</Text>
                  <Divider insetType="middle" />
                </>
              )}
              <View style={styles.tagContainer}>
                {experience?.tag_styles?.map((style, index) => {
                  return (
                    <Text key={index} style={styles.tag}>
                      {style}
                    </Text>
                  );
                })}
              </View>
            </View>
          );
        })}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  containerList: {
    flex: 1,
  },
  container: {
    flexDirection: "column",
    padding: 10,
    margin: 10,
    borderWidth: 0.3,
    borderRadius: 5,
  },
  songContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  content: {
    marginLeft: 10,
    width: "80%",
    flexDirection: "column",
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  tag: {
    backgroundColor: "#ccc",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  sub: {
    fontStyle: "italic",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  songText: {
    fontSize: 18,
  },
  artistText: {
    fontWeight: "300",
    fontSize: 18,
  },
  aboutText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "300",
    textAlign: "left",
  },
});
