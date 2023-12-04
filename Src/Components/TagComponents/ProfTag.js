import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Chip } from '@rneui/themed';
const ProfTag = () => {
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
        "Producer",
        "A&R Representative",
        "Songwriter",
        "Composer",
        "Arranger",
        "Session Musician",
        "Mixing Engineer",
        "Mastering Engineer",
        "Manager",
        "Booking Agent",
        "Publicist",
        "Music Publisher",
        "Music Director",
        "Promoter",
        "Sound Engineer"
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

export default ProfTag;
