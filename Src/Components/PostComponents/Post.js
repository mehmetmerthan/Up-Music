import { SafeAreaView, View, Text, Pressable } from "react-native";
import { React } from "react";
import styles from "../../Styles/PostStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { S3ImageAvatar, S3PostMedia } from "../S3Media";
import { Chip } from "@rneui/themed";

const Post = ({ item }) => {
  const navigation = useNavigation();
  function navigateToUserDetail() {
    navigation.navigate("UserDetailScreen", { userId: item?.owner?.id });
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable style={styles.userInfo} onPress={navigateToUserDetail}>
          <S3ImageAvatar imageKey={item?.owner?.key_pp} size={52} />
          <Text style={styles.username}>{item?.owner?.name}</Text>
        </Pressable>
        <Text style={styles.contentText}>{item?.content}</Text>
        {item.country && (
          <View style={styles.locationContainer}>
            <Ionicons
              name="location-outline"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.text}>{item?.country}</Text>
          </View>
        )}
        {/* <S3PostMedia mediaKey={item?.key_media} mediaType={"image"} /> */}
        {item?.price && <Text style={styles.textPrice}>{item?.price}"$"</Text>}
        {item?.tag_styles?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadingText}>Music Styles</Text>
            <View style={styles.tagsContainer}>
              {item?.tag_styles?.map((style, styleIndex) => (
                <Chip
                  key={styleIndex}
                  title={style}
                  type="outline"
                  buttonStyle={styles.tag}
                  titleStyle={styles.tagText}
                />
              ))}
            </View>
          </View>
        )}
        {item?.tag_instruments?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.tagsContainer}>Musician Needed</Text>
            {item?.tag_roles_needed?.map((musician, musicianIndex) => (
              <Chip
                key={musicianIndex}
                title={musician}
                type="outline"
                buttonStyle={styles.tag}
                titleStyle={styles.tagText}
              />
            ))}
          </View>
        )}
        {item?.tag_roles?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadingText}>Musician Existing</Text>
            <View style={styles.tagsContainer}>
              {item?.tag_roles?.map((musician, musicianIndex) => (
                <Chip
                  key={musicianIndex}
                  title={musician}
                  type="outline"
                  buttonStyle={styles.tag}
                  titleStyle={styles.tagText}
                />
              ))}
            </View>
          </View>
        )}
        {item?.tag_roles?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionHeadingText}>Instruments Played</Text>
            <View style={styles.tagsContainer}>
              {item?.tag_roles?.map((musician, musicianIndex) => (
                <Chip
                  key={musicianIndex}
                  title={musician}
                  type="outline"
                  buttonStyle={styles.tag}
                  titleStyle={styles.tagText}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Post;
