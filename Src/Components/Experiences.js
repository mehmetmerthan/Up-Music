import { View, Text, StyleSheet } from "react-native";
import { React } from "react";
import { Avatar, Divider } from "@rneui/themed";
export default function Experiences({ experiencesData }) {
  return (
    <View>
      {experiencesData?.map((experience, index) => {
        return (
          <View style={styles.container} key={index}>
            <View style={styles.songContainer}>
              <Avatar
                size={52}
                rounded
                source={{ uri: experience?.song?.album?.images[0]?.url }}
              />
              <View style={styles.content}>
                <Text style={styles.songText}>{experience?.song?.name} </Text>
                <Text style={styles.artistText}>
                  {experience?.song?.artists[0]?.name}
                </Text>
              </View>
            </View>
            <Divider />
            <Text style={styles.aboutText}>{experience?.about}</Text>
            {experience?.roles?.length > 0 && (
              <>
                <Text style={styles.sub}>Role</Text>
                <Divider insetType="middle" />
              </>
            )}
            <View style={styles.tagContainer}>
              {experience?.roles?.map((role, index) => {
                return (
                  <Text key={index} style={styles.tag}>
                    {role}
                  </Text>
                );
              })}
            </View>
            {experience?.styles?.length > 0 && (
              <>
                <Text style={styles.sub}>Style</Text>
                <Divider insetType="middle" />
              </>
            )}
            <View style={styles.tagContainer}>
              {experience?.styles?.map((style, index) => {
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
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
