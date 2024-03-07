import { React, useEffect, useState, useRef } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "../Styles/UserProfileStyle";
import { EvilIcons, FontAwesome } from "@expo/vector-icons";
import { Chip, Button, Image, Skeleton } from "@rneui/themed";
import { API, Storage } from "aws-amplify";
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
  const [urlLoading, setUrlLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const route = useRoute();
  const { userId } = route?.params || "";
  const navigation = useNavigation();
  async function getUserAtt() {
    setLoading(true);
    const item = await API.graphql({
      query: getUser,
      variables: { id: userId },
    });
    const userItem = item?.data?.getUser;
    const res = await getUserId();
    setUserData(userItem);
    setCurrentUserId(res);
    setLoading(false);
    if (userItem?.key_pp) {
      try {
        const s3Link = await Storage.get(userItem?.key_pp, {
          validateObjectExistence: true,
        });
        if (s3Link) {
          setUrl(s3Link);
        }
      } catch (error) {
        console.log("S3 error", error);
      } finally {
        setUrlLoading(false);
      }
    } else {
      setUrlLoading(false);
    }
  }
  useEffect(() => {
    getUserAtt();
  }, []);
  return (
    <>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        />
      ) : (
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.userProfileTop}>
            {!urlLoading && url ? (
              <Image
                source={{ uri: url }}
                PlaceholderContent={<Skeleton width={"100%"} height={300} />}
                style={{ resizeMode: "cover" }}
                containerStyle={{
                  width: "100%",
                  height: 300,
                  resizeMode: "cover",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            ) : urlLoading ? (
              <Skeleton width={"100%"} height={300} />
            ) : (
              <FontAwesome name="user-circle-o" size={300} color="#000000" />
            )}
            <View style={styles.profileNameContainer}>
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
            </View>
          </View>
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
              decelerationRate={0.8}
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
