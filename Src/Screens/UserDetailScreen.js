import { React, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Animated,
} from "react-native";
import styles from "../Styles/UserProfileStyle";
import { EvilIcons } from "@expo/vector-icons";
import { Chip, Button } from "@rneui/themed";
import { API, Storage, Auth } from "aws-amplify";
import Experiences from "../Components/Experiences";
import Post from "../Components/PostComponents/Post";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { getUser } from "../Utils/Queries/userQueries";
import { useNavigation } from "@react-navigation/native";
import { getUserId } from "../Utils/getUser";
const UserDetailScreen = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");
  const route = useRoute();
  const { userId } = route?.params || "";
  const navigation = useNavigation();
  async function getUserAtt() {
    setLoading(true);
    const item = await API.graphql({
      query: getUser,
      variables: { id: userId },
    });
    let userItem = item?.data?.getUser;

    const res = await getUserId();
    setCurrentUserId(res);
    try {
      let s3Link = null;
      if (userItem?.key_pp) {
        s3Link = await Storage.get(userItem?.key_pp, {
          validateObjectExistence: true,
        });
      }
      if (s3Link) {
        userItem.key_pp = s3Link;
      } else {
        userItem.key_pp = null;
      }
    } catch (error) {
      console.log("S3 error", error);
    } finally {
      setUserData(userItem);
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserAtt();
  }, []);
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 0],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, -250],
    extrapolate: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, 1.5],
    extrapolate: "clamp",
  });
  const borderRadius = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [40, 0],
    extrapolate: "clamp",
  });
  return (
    <>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
        >
          <Animated.View
            style={[styles.userProfileTop, { height: headerHeight }]}
          >
            {userData?.key_pp && (
              <Animated.Image
                source={{ uri: userData?.key_pp }}
                style={[
                  styles.profileImage,
                  {
                    opacity: imageOpacity,
                    transform: [
                      { translateY: imageTranslateY },
                      { scaleX: imageScale },
                      { scaleY: imageScale },
                    ],
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                  },
                ]}
              />
            )}
            <Animated.View
              style={[
                styles.profileNameContainer,
                {
                  opacity: imageOpacity,
                  transform: [
                    { translateY: imageTranslateY },
                    { scaleX: imageScale },
                    { scaleY: imageScale },
                  ],
                },
              ]}
            >
              <Text style={styles.userProfileInfoName}>{userData.name}</Text>
              {userData?.country && (
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
              )}
            </Animated.View>
          </Animated.View>
          <View style={styles.userProfileBody}>
            {userId !== currentUserId && (
              <View style={styles.flexB}>
                <Button
                  title={"Message"}
                  onPress={() =>
                    navigation.navigate("MessageDetailScreen", {
                      senderId: userId,
                    })
                  }
                  buttonStyle={styles.buttonSave}
                />
              </View>
            )}
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
              Roles
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
            {userData?.experiences?.length > 0 && (
              <Experiences experiencesData={userData?.experiences} />
            )}
            <View style={styles.divider} />
            <Text style={styles.sectionHeadingText}>Announcments</Text>
            <FlatList
      decelerationRate={0.5}
              data={userData?.posts?.items}
              renderItem={({ item }) => <Post item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};
export default UserDetailScreen;
