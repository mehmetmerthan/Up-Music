import { React, useEffect, useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons } from "@expo/vector-icons";
import Post from "../../Components/PostComponents/UserPost";
import { Chip, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { getUserAttributes } from "../../Utils/getUser";
import { S3ImageAvatar } from "../../Components/S3Media";
const ProfileScreen = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  async function getUser() {
    const { userItem } = await getUserAttributes();
    setUserData(userItem);
  }
  useEffect(() => {
    getUser();
  }, [userData]);
  const navigation = useNavigation();
  function editProfile() {
    setLoading(true);
    navigation.navigate("EditProfileScreen", { userData });
    setLoading(false);
  }
  return (
    <ScrollView>
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
            {userData?.location.city}, {userData?.location.country}
          </Text>
        </View>
        <View style={[styles.userProfileWidget, styles.widget]}>
          <View style={styles.widgetItem}>
            <Text style={styles.widgetItemLabel}>FOLLOWING</Text>
            <Text style={styles.widgetItemValue}>638</Text>
          </View>
          <View style={[styles.widgetItem, styles.widgetItemLast]}>
            <Text style={styles.widgetItemLabel}>FOLLOWERS</Text>
            <Text style={styles.widgetItemValue}>356</Text>
          </View>
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
            loading={loading}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionHeadingText} numberOfLines={1}>
            About
          </Text>
        </View>
        <View style={styles.sectionContent}>
          <Text style={styles.typography}>
            {userData.about ? userData.about : "No description"}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionHeadingText} numberOfLines={1}>
            Music Styles
          </Text>
        </View>
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
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionHeadingText} numberOfLines={1}>
            Instruments Played
          </Text>
        </View>
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
        <Text style={styles.PostText}> Posts </Text>
        <Post />
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
