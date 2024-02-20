import { SafeAreaView, View, Text, Pressable } from "react-native";
import { React } from "react";
import styles from "../../Styles/userPostStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { S3ImageProfile } from "../S3Media";
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
          <S3ImageProfile imageKey={item?.key_pp} />
          <View style={styles.profileNameContainer}>
            <Text style={styles.username}>{item?.name}</Text>
            {item.country && (
              <View style={styles.locationContainer}>
                <Ionicons
                  name="location-outline"
                  size={15}
                  color="#f1f1f1"
                  style={styles.icon}
                />
                <Text style={styles.locationText}>{item?.country}</Text>
              </View>
            )}
          </View>
        </Pressable>
        {item?.price && <Text style={styles.textPrice}>{item?.price}"$"</Text>}
        {item?.tag_styles?.length > 0 && (
          <View style={styles.tagArea}>
            <View style={styles.section}>
              {item?.tag_roles?.length > 0 && (
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
              )}
            </View>
          </View>
        )}
        <View style={styles.sectionRole}>
          <Text style={styles.sectionHeadingTextRole}>Music Styles</Text>
          <View style={styles.tagsContainer}>
            {item?.tag_styles?.map((style, styleIndex) => (
              <Chip
                key={styleIndex}
                title={style}
                type="outline"
                buttonStyle={styles.tag}
                titleStyle={styles.tagTextRole}
              />
            ))}
          </View>
        </View>
        {item?.experiences?.length > 0 && (
          <Experieces experiencesData={item?.experiences} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default PostUser;
