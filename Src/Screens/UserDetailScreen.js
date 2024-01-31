import { React, useEffect, useState } from "react";
import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import styles from "../Styles/UserProfileStyle";
import { EvilIcons } from "@expo/vector-icons";
import { Chip, Button } from "@rneui/themed";
import { API } from "aws-amplify";
import { S3ImageAvatar } from "../Components/S3Media";
import Experiences from "../Components/Experiences";
import Post from "../Components/PostComponents/Post";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { getUser } from "../Utils/Queries/userQueries";
import { useNavigation } from "@react-navigation/native";
const UserDetailScreen = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const { userId } = route?.params || "";
  const navigation = useNavigation();
  async function getUserAtt() {
    setLoading(true);
    try {
      const item = await API.graphql({
        query: getUser,
        variables: { id: userId },
      });
      const userItem = item?.data?.getUser;
      setUserData(userItem);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    getUserAtt();
  }, []);
  return (
    <ScrollView>
      {loading && <ActivityIndicator />}
      <View style={styles.userProfileTop}>
        <Image
          source={{ uri: "https://picsum.photos/800/800" }}
          style={styles.userProfileTopBg}
        />
        <View style={styles.userProfileTopOverlay} />
        <S3ImageAvatar imageKey={userData?.key_pp} size={150} />
        <Text style={styles.userProfileInfoName}>{userData.name}</Text>
        <View style={styles.userProfileInfoLocation}>
          <EvilIcons
            name="location"
            size={20}
            color="rgba(255, 255, 255, 0.5)"
          />
          <Text style={styles.userProfileInfoLocationText}>
            {userData?.city}, {userData?.country}
          </Text>
        </View>
      </View>
      <View style={styles.userProfileBody}>
        <View style={styles.flexB}>
          <Button
            title={"Message"}
            onPress={() =>
              navigation.navigate("MessageDetailScreen", { senderId: userId })
            }
            buttonStyle={styles.buttonSave}
          />
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionHeadingText} numberOfLines={1}>
          About
        </Text>
        <View style={styles.sectionContent}>
          <Text style={styles.typography}>
            {userData.about ? userData.about : "No description"}
          </Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionHeadingText} numberOfLines={1}>
          Music Styles
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          {userData?.tag_styles?.map((item, index) => (
            <Chip
              key={index}
              title={item}
              titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
              buttonStyle={{ borderColor: "#000000" }}
              type="outline"
              containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
              style={{ backgroundColor: "#ccc" }}
            />
          ))}
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionHeadingText} numberOfLines={1}>
          Instruments Played
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          {userData?.tag_roles?.map((item, index) => (
            <Chip
              key={index}
              title={item}
              titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
              buttonStyle={{ borderColor: "#000000" }}
              type="outline"
              containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
              style={{ backgroundColor: "#ccc" }}
            />
          ))}
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionHeadingText}>Experiences</Text>
        <Experiences experiencesData={userData?.experiences} />
        <View style={styles.divider} />
        <Text style={styles.sectionHeadingText}>Announcments</Text>
        <FlatList
          data={userData?.posts?.items}
          renderItem={({ item }) => <Post item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};
export default UserDetailScreen;
