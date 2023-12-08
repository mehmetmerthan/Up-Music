import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { React, useState } from "react";
import styles from "../../../Styles/Post/SearchMusicianPostStyle";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MusicianPost = ({post}) => {
    const [isIconChanged, setIconChanged] = useState(false);

    const navigation = useNavigation();
    function navigateToUserDetail() {
        navigation.navigate("UserDetailScreen");
    }
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <TouchableOpacity style={styles.userInfo} onPress={navigateToUserDetail}>
                    <Image
                        style={styles.userAvatar}
                        source={{ uri: post.userAvatar }}
                    />
                    <Text style={styles.username}>{post.username}</Text>
                </TouchableOpacity>
                <Text style={styles.contentText}>{post.contentText}</Text>
                <Text style={styles.sectionHeadingText}>Music Styles</Text>
                <View style={styles.hStackContent}>
                    {post.musicStyles.map((style, styleIndex) => (
                        <View style={styles.hStackItemWrap} key={styleIndex}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>{style}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Text style={styles.sectionHeadingText}>Instruments Played</Text>
                <View style={styles.hStackContent}>
                    {post.musiciansNeeded.map((musician, musicianIndex) => (
                        <View style={styles.hStackItemWrap} key={musicianIndex}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>{musician}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setIconChanged(!isIconChanged)}
                >
                    {isIconChanged ? (
                        <Feather name="check-circle" size={24} color="green" />
                    ) : (
                        <Feather name="plus-circle" size={24} color="black" />
                    )}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MusicianPost;
