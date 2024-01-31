import { SafeAreaView, View, Text, Pressable } from "react-native";
import { React } from "react";
import styles from "../../Styles/userPostStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { S3ImageAvatar } from "../S3Media";
import { Chip, Divider } from "@rneui/themed";
import Experieces from "../Experiences";
const PostUser = ({ item }) => {
  const navigation = useNavigation();
  function navigateToUserDetail() {
    navigation.navigate("UserDetailScreen", { userId: item?.id });
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable style={styles.userInfo} onPress={navigateToUserDetail}>
          <S3ImageAvatar imageKey={item?.key_pp} size={80} />
          <View style={styles.userContent}>
            <View style={styles.userRow}>
              <Text style={styles.username}>{item?.name}</Text>
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
            </View>
            <Divider insetType="middle" />
            {item?.tag_roles?.length > 0 && (
              <View style={styles.tagsContainerRoles}>
                {item?.tag_roles?.map((musician, musicianIndex) => (
                  <Chip
                    key={musicianIndex}
                    title={musician}
                    type="outline"
                    buttonStyle={styles.tagRole}
                    titleStyle={styles.tagTextRole}
                  />
                ))}
              </View>
            )}
          </View>
        </Pressable>
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
        <Experieces experiencesData={item?.experiences} />
      </View>
    </SafeAreaView>
  );
};

export default PostUser;
