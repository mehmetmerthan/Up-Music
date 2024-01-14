import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { React } from "react";
import styles from "../../../Styles/Post/EventPostStyle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { S3ImageAvatar } from "../../S3Media";
const ProfPost = ({ item }) => {
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
        <Text style={styles.sectionHeadingText}>Music Styles</Text>
        <View style={styles.hStackContent}>
          {item?.tag_styles.map((style, styleIndex) => (
            <View style={styles.hStackItemWrap} key={styleIndex}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{style}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfPost;
