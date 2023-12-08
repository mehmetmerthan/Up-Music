import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { React, useState } from "react";
import styles from "../../../Styles/Post/EventPostStyle";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const StagePost = ({ post }) => {
    const [isIconChanged, setIconChanged] = useState(false);
    const navigation = useNavigation();
    function navigateToUserDetail() {
        navigation.navigate("UserDetailScreen");
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.userInfo} onPress={navigateToUserDetail}>
                    <Image
                        style={styles.userAvatar}
                        source={{ uri: post.userAvatar }}
                    />
                    <Text style={styles.username}>{post.username}</Text>
                </TouchableOpacity>
                <Text style={styles.contentText}>{post.contentText}</Text>
                <Ionicons
                    name="location-outline"
                    size={24}
                    color="black"
                    style={styles.icon}
                />
                <Text style={styles.text}>{post.location}</Text>
                <Text style={styles.textPrice}>{post.price}"$"</Text>
                <Image
                    style={styles.contentImage}
                    source={{
                        uri: post.contentImage,
                    }}
                />
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

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setIconChanged(!isIconChanged)}
                >
                    {isIconChanged ? (
                        <Feather name="check-circle" size={24} color="green" />
                    ) : (
                        <Feather name="plus-circle" size={24} color="black" />
                    )}
                    <Text>Send a request</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default StagePost;
