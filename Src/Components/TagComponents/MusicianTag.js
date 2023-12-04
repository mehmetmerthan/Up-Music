import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Chip } from '@rneui/themed';
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
    console.log("Selected Tags:", selectedTags);
  };

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginVertical: 10 }}>
      {data.map((item, index) => (
        <Chip
          key={index}
          title={item}
          titleStyle={{
            color: selectedTags.includes(item)
              ? "#e3e3e3"
              : "#464646",
          }}
          buttonStyle={{ borderColor: "#464646" }}
          onPress={() => toggleTag(item)}
          type="outline"
          containerStyle={{
            backgroundColor: selectedTags.includes(item)
              ? "green"
              : "#cccccc00",
            marginVertical: 5,
            marginHorizontal: 5

          }}

        />
      ))}
    </ScrollView>
  );
};

export default MusicianTag;



