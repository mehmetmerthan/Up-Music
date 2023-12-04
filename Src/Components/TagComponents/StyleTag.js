import { React, useState } from "react";
import { ScrollView, View } from "react-native";
import { Chip } from '@rneui/themed';

const StyleTag = () => {
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
    "Rock",
    "Pop",
    "Jazz",
    "Blues",
    "Funk",
    "R&B",
    "Soul",
    "Country",
    "Reggae",
    "Hip Hop",
    "Classical",
    "Latin",
    "Metal",
    "Punk",
    "Electronic",
    "Folk",
    "Experimental",
    "World",
    "Other",
  ];

  const handleButtonClick = () => {
    // Log selected tags to the console
    console.log("Selected Tags:", selectedTags);
  };

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10 }}>
      {data.map((item, index) => (
        <Chip
          key={index}
          title={item}
          titleStyle={{ color: selectedTags.includes(item)
            ? "#e3e3e3"
            : "#464646", }}
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

export default StyleTag;
