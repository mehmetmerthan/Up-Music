import { ScrollView,View, Text, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/EventPostStyle";
import { Feather, Ionicons } from "@expo/vector-icons";
const EventScreen = () => {
  const [isIconChanged, setIconChanged] = useState(false);
  const postData = [
    {
      username: "Amelie",
      contentText: "First post",
      contentImage:
        "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTkyMzA2Njc5NjQyMDcyMzAw/do-you-need-a-teacher-to-learn-guitar.jpg",
      location: "London",
      musicStyles: ["Rock", "Pop"],
      userAvatar:
        "https://cdn.cliqueinc.com/posts/298233/clean-girl-beauty-looks-298233-1646073847519-image.600x0c.jpg?interlace=true&quality=70",
      partipicantCount: 3,
      partipicants: [{ username: "Amelie" }, { username: "Farah" }],
    },
  ];

  return (
    <ScrollView>
      {postData.map((post, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.userInfo}>
            <Image
              style={styles.userAvatar}
              source={{ uri: post.userAvatar }}
            />
            <Text style={styles.username}>{post.username}</Text>
          </View>
          <Text style={styles.contentText}>{post.contentText}</Text>
          <Ionicons
            name="location-outline"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>{post.location}</Text>
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
          <Text style={styles.sectionHeadingText}>
            Partipicants Count {post.partipicantCount}
          </Text>
          <View style={styles.hStackContent}>
            {post.partipicants.map((partipicant, partipicantIndex) => (
              <View style={styles.hStackItemWrap} key={partipicantIndex}>
                <Image
                  style={styles.userAvatarExisting}
                  source={{ uri: post.userAvatar }}
                />
                <Text>{partipicant.username}</Text>
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
            <Text>Join</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default EventScreen;