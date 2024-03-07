import { React, useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons } from "@expo/vector-icons";
import { Chip, Button, Image, Skeleton } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { getUserAttributes } from "../../Utils/getUser";
import Experiences from "../../Components/Experiences";
import Post from "../../Components/PostComponents/Post";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { Storage } from "aws-amplify";
import { USER_TYPES } from "../../../Constants/Enums/UserTypes";
import { FontAwesome } from "@expo/vector-icons";
const ProfileScreen = () => {
  const [userData, setUserData] = useState({});
  const [loadingButton, setLoadingButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlLoading, setUrlLoading] = useState(true);
  const [url, setUrl] = useState(null);
  async function getUser() {
    setLoading(true);
    const { userItem } = await getUserAttributes();
    setUserData(userItem);
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
  const route = useRoute();
  const { worker } = route?.params || "";
  useEffect(() => {
    getUser();
  }, [worker]);
  const navigation = useNavigation();
  function editProfile() {
    setLoadingButton(true);
    if (userData?.user_type === USER_TYPES.PERSONAL) {
      navigation.navigate("EditProfileScreen", { userData, url });
    } else if (
      userData?.user_type === USER_TYPES.VENUE ||
      userData?.user_type === USER_TYPES.COMPANY
    ) {
      navigation.navigate("EditProfileCompany", { userData, url });
    }
    setLoadingButton(false);
  }

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
              <Text style={styles.userProfileInfoName}>{userData?.name}</Text>
              {userData?.city && (
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
            <View style={styles.flexB}>
              <Button
                title="Edit Profile"
                titleStyle={styles.buttonTextEdit}
                onPress={editProfile}
                type="outline"
                buttonStyle={styles.buttonEdit}
                loading={loadingButton}
              />
              <Button
                title={"Settings"}
                onPress={() => navigation.navigate("SettingsStack")}
                buttonStyle={styles.buttonSettings}
              />
            </View>
            <View style={styles.divider} />
            {userData?.about && (
              <>
                <Text style={styles.sectionHeadingText} numberOfLines={1}>
                  About
                </Text>
                <View style={styles.sectionContent}>
                  <Text style={styles.typography}>
                    {userData?.about ? userData?.about : "No description"}
                  </Text>
                </View>
                <View style={styles.divider} />
              </>
            )}
            {userData?.tag_styles?.length > 0 && (
              <>
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
                      containerStyle={{
                        marginVertical: 5,
                        marginHorizontal: 5,
                      }}
                      style={{ backgroundColor: "#ccc" }}
                    />
                  ))}
                </View>
              </>
            )}
            {userData?.tag_roles?.length > 0 && (
              <>
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
                      containerStyle={{
                        marginVertical: 5,
                        marginHorizontal: 5,
                      }}
                      style={{ backgroundColor: "#ccc" }}
                    />
                  ))}
                </View>
              </>
            )}
            {userData?.experiences?.length > 0 && (
              <>
                <View style={styles.divider} />
                <Text style={styles.sectionHeadingText}>Experiences</Text>
                <Experiences experiencesData={userData?.experiences} />
              </>
            )}

            {userData?.posts?.items?.length > 0 && (
              <>
                <View style={styles.divider} />
                <Text style={styles.sectionHeadingText}>Announcments</Text>
              </>
            )}
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
export default ProfileScreen;
