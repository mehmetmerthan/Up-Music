import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../Styles/TagStyle";
const MusicianTag = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    // Check if the tag is already selected
    if (selectedTags.includes(tag)) {
      // If selected, remove it
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    } else {
      // If not selected, add it
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };
  const data = [
    "Guitarist",
    "Drummer",
    "Bassist",
    "Keyboardist",
    "Vocalist",
    "Producer",
    "DJ",
    "Songwriter",
    "Composer",
    "Manager",
    "Sound Engineer",
    "Other",
  ];

  const handleButtonClick = () => {
    // Log selected tags to the console
    console.log("Selected Tags:", selectedTags);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.hStack}>
          <View style={styles.hStackContent}>
            {data.map((item, index) => (
              <View style={styles.hStackItemWrap} key={index}>
                <TouchableOpacity
                  onPress={() => toggleTag(item)}
                  activeOpacity={0.8}
                  hitSlop={{
                    top: 5,
                    right: 5,
                    bottom: 5,
                    left: 5,
                  }}
                >
                  <View
                    style={{
                      ...styles.tag,
                      backgroundColor: selectedTags.includes(item)
                        ? "green" // You can change the color for selected tags
                        : "#ccc",
                    }}
                  >
                    <Text style={styles.tagText}>{item}</Text>
                    {/* <Image
                      style={styles.tagIcon}
                      resizeMode="contain"
                      source={{
                        uri: "https://manual-ui.com/images/close.png",
                      }}
                    /> */}
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        {/* <TouchableOpacity onPress={handleButtonClick}>
          <Text>Get Selected Tags</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MusicianTag;
