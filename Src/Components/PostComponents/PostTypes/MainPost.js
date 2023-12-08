import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Pressable,
    SafeAreaView,
} from "react-native";
import { React, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../../Styles/Post/PostStyle";
import CommentForm from "../CommentForm";
import Comment from "../Comment";
import { useNavigation } from "@react-navigation/native";
const MainPost = ({ post }) => {
    const [likes, setLikes] = useState(Array(postData.length).fill(false));
    const [commentVisibility, setCommentVisibility] = useState(Array(postData.length).fill(false));
    const toggleLike = (index) => {
        const newLikes = [...likes];
        newLikes[index] = !newLikes[index];
        setLikes(newLikes);
    };

    const toggleComments = (index) => {
        const newVisibility = [...commentVisibility];
        newVisibility[index] = !newVisibility[index];
        setCommentVisibility(newVisibility);
    };
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
                        source={{
                            uri: post.userAvatar,
                        }}
                    />
                    <Text style={styles.username}>{post.userName}</Text>
                </TouchableOpacity>
                <Image
                    style={styles.contentImage}
                    source={{
                        uri: post.contentImage,
                    }}
                />
                <Text style={styles.contentText}>{post.contentText}</Text>

                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => toggleLike(index)} style={styles.likeContainer}>
                        <FontAwesome
                            name={likes[index] ? "heart" : "heart-o"}
                            size={24}
                            color={likes[index] ? "red" : "black"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleComments(index)} style={styles.commentContainer}>
                        <FontAwesome name="comment-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.likeCount, { flexDirection: "column" }]}>{post.likeCount}</Text>
                    <Pressable onPress={() => x(index)} style={{ flexDirection: "column" }}>
                        <Text style={styles.likeText}>Liked</Text>
                    </Pressable>
                </View>


                {commentVisibility[index] && (
                    <View>
                        <Comment />
                        <CommentForm />
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};
export default MainPost;

function x() {
    console.log("pressed!");
}