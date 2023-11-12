import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Video,
    Pressable,
  } from "react-native";
  import { React, useState } from "react";
  import { FontAwesome } from "@expo/vector-icons";
  import styles from "../../Styles/PostStyle";
  import CommentForm from "./CommentForm";
  import Comment from "./Comment";
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
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userAvatar}
            source={{
              uri: "https://cdn.cliqueinc.com/posts/298233/clean-girl-beauty-looks-298233-1646073847519-image.600x0c.jpg?interlace=true&quality=70",
            }}
          />
          <Text style={styles.username}>Amelie</Text>
        </View>
        <Image
          style={styles.contentImage}
          source={{
            uri: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTkyMzA2Njc5NjQyMDcyMzAw/do-you-need-a-teacher-to-learn-guitar.jpg",
          }}
        />
        <Text style={styles.contentText}>First post</Text>
  
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
        <Text style={styles.likeCount}>12</Text>
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
    );
  };
  export default Post;
  
  function x(){
    console.log("pressed!")
  }