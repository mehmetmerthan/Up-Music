import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Video,
  Pressable,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../../Styles/PostStyle";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import postData from "../../../data/postData";
const Post = () => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  return (
    <ScrollView>
      {postData.map((post, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.userInfo}>
            <Image
              style={styles.userAvatar}
              source={{
                uri: post.userAvatar,
              }}
            />
            <Text style={styles.username}>{post.userName}</Text>
          </View>
          <Image
            style={styles.contentImage}
            source={{
              uri: post.contentImage,
            }}
          />
          <Text style={styles.contentText}>{post.contentText}</Text>

          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={toggleLike} style={styles.likeContainer}>
              <FontAwesome
                name={liked ? "heart" : "heart-o"}
                size={24}
                color={liked ? "red" : "black"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleComments}
              style={styles.commentContainer}
            >
              <FontAwesome name="comment-o" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.likeCount}>{post.likeCount}</Text>
          <Pressable onPress={x}>
            <Text style={styles.likeText}>Liked</Text>
          </Pressable>
          {showComments && (
            <View>
              <Comment />
              <CommentForm />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};
export default Post;

function x() {
  console.log("pressed!");
}
