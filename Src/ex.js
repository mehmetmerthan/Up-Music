import { styleTagData } from '../data/TagData';
import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { Chip } from '@rneui/themed';
const Ex = () => {
    const tagData = styleTagData;
    const [selectedTags, setSelectedTags] = useState([]);
    const [unselectedTags, setUnselectedTags] = useState(tagData);
    const [text, onChangeText] = useState("");
    const maxDisplayedItems = 10;
    const filteredData = tagData
        .filter(tag => tag.toLowerCase().includes(text.toLowerCase()))
        .sort((a, b) => {
            // Sıralama: Aranan kelimeye daha yakın olan öğeler önce gelir.
            const indexOfA = a.toLowerCase().indexOf(text.toLowerCase());
            const indexOfB = b.toLowerCase().indexOf(text.toLowerCase());
            return indexOfA - indexOfB;
        })
        .slice(0, maxDisplayedItems);
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
            setUnselectedTags((prevTags) => [...prevTags, tag]);
        } else {
            setSelectedTags((prevTags) => [...prevTags, tag]);
            setUnselectedTags((prevTags) => prevTags.filter((t) => t !== tag));
        }
    };
    const handleButtonClick = () => {
        console.log("Selected Tags:", selectedTags);
        console.log("Unselected Tags:", unselectedTags);
    };

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
                                color: selectedTags.includes(item) ? "#e3e3e3" : "#464646",
                            }}
                            buttonStyle={{ borderColor: "#464646" }}
                            onPress={() => toggleTag(item)}
                            type="outline"
                            containerStyle={{
                                backgroundColor: selectedTags.includes(item) ? "green" : "#cccccc00",
                                marginVertical: 5,
                                marginHorizontal: 5
                            }}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );

};

export default Ex;

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
