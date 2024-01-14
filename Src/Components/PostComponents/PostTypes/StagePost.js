import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { React, useState } from "react";
import styles from "../../../Styles/Post/EventPostStyle";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { S3ImageAvatar, S3PostMedia } from "../../S3Media";
const StagePost = ({ item }) => {
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
        <Ionicons
          name="location-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.text}>{item?.country}</Text>
        <Text style={styles.textPrice}>{item?.price}"$"</Text>
        <S3PostMedia mediaKey={item?.key_media} mediaType={"image"} />
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
