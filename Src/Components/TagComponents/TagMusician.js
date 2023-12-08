import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { Chip } from '@rneui/themed';
const TagMusician = ({ tagData }) => {
    const [selectedMusicianTags, setSelectedMusicianTags] = useState([]);
    const [unselectedTags, setUnselectedTags] = useState(tagData);
    const [text, onChangeText] = useState("");
    const filteredData = tagData.filter(tag =>
        tag.toLowerCase().includes(text.toLowerCase())
    );
    const toggleTag = (tag) => {
        if (selectedMusicianTags.includes(tag)) {
            setSelectedMusicianTags((prevTags) => prevTags.filter((t) => t !== tag));
            setUnselectedTags((prevTags) => [...prevTags, tag]);
        } else {
            setSelectedMusicianTags((prevTags) => [...prevTags, tag]);
            setUnselectedTags((prevTags) => prevTags.filter((t) => t !== tag));
        }
    };
    const handleButtonClick = () => {
        console.log("Selected Tags:", selectedMusicianTags);
        console.log("Unselected Tags:", unselectedTags);
    };
    function MusicianTagComponent() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        onChangeText(text);
                    }}
                    placeholder="Search ..."
                    value={text}
                />
                <View style={styles.searchArea}>
                    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                        {filteredData.map((item, index) => (
                            <Chip
                                key={index}
                                title={item}
                                titleStyle={{
                                    color: selectedMusicianTags.includes(item) ? "#e3e3e3" : "#464646",
                                }}
                                buttonStyle={{ borderColor: "#464646" }}
                                onPress={() => toggleTag(item)}
                                type="outline"
                                containerStyle={{
                                    backgroundColor: selectedMusicianTags.includes(item) ? "green" : "#cccccc00",
                                    marginVertical: 5,
                                    marginHorizontal: 5
                                }}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
    return { MusicianTagComponent, selectedMusicianTags };
};

export default TagMusician;

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "80%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#ccc",
        alignSelf: "center",
    },
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    searchArea: {
        alignItems: "center",
        justifyContent: "center",
        height: 300,
    },
});
