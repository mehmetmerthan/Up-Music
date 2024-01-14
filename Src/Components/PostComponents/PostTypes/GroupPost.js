import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { React, useState } from "react";
import styles from "../../../Styles/Post/SearchMusicianPostStyle";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { S3ImageAvatar } from "../../S3Media";
const GroupPost = ({ item }) => {
  const [isIconChanged, setIconChanged] = useState(false);
  const navigation = useNavigation();
  function navigateToUserDetail() {
    navigation.navigate("UserDetailScreen");
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={navigateToUserDetail}
        >
          <S3ImageAvatar imageKey={item?.owner?.key_pp} size={52} />
          <Text style={styles.username}>{item?.owner?.name}</Text>
        </TouchableOpacity>
        <Text style={styles.contentText}>{item?.content}</Text>
        <Text style={styles.sectionHeadingText}>Music Styles</Text>
        <View style={styles.hStackContent}>
          {item?.tag_styles?.map((style, styleIndex) => (
            <View style={styles.hStackItemWrap} key={styleIndex}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{style}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.sectionHeadingText}>Musician Needed</Text>
        <View style={styles.hStackContent}>
          {item?.tag_roles_needed?.map((musician, musicianIndex) => (
            <View style={styles.hStackItemWrap} key={musicianIndex}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{musician}</Text>
              </View>
            </View>
          ))}
        </View>
        <Text style={styles.sectionHeadingText}>Musician Existing</Text>
        <View style={styles.hStackContent}>
          {item?.tag_roles?.map((musician, musicianIndex) => (
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
            <Feather name="user-check" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GroupPost;
