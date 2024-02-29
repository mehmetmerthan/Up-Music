import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { React, useEffect, useState, memo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Skeleton } from "@rneui/themed";
import { Storage } from "aws-amplify";
import { getUserId } from "../../Utils/getUser";
import { USER_TYPES } from "../../../Constants/Enums/UserTypes";
import { Entypo } from "@expo/vector-icons";
const PostCompany = memo(({ item }) => {
  const [loading, setLoading] = useState(true);
  const [loadingApply, setLoadingApply] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const navigation = useNavigation();
  async function navigateToAplly() {
    setLoadingApply(true);
    const userId = await getUserId();
    if (item.user_type === USER_TYPES.COMPANY) {
      navigation.navigate("ApplyCompanyScreen", {
        userId: userId,
        companyId: item?.id,
      });
    } else if (item.user_type === USER_TYPES.VENUE) {
      navigation.navigate("MessageDetailScreen", {
        senderId: userId,
      });
    }
    setLoadingApply(false);
  }
  async function getS3Url() {
    setLoading(true);
    try {
      if (item?.key_pp && !imgUrl) {
        const s3Link = await Storage.get(item?.key_pp, {
          validateObjectExistence: true,
        });
        setImgUrl(s3Link);
      }
    } catch (error) {
      console.log("S3 error", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getS3Url();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          {loading ? (
            <Skeleton width={"auto"} height={260} style={styles.skeleton} />
          ) : (
            <>
              {imgUrl && (
                <Image
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    height: 260,
                    resizeMode: "cover",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  source={{ uri: imgUrl }}
                />
              )}
            </>
          )}
        </View>
        <View style={styles.column}>
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
                {item.city && (
                  <Text style={styles.locationText}>, {item?.city}</Text>
                )}
              </View>
            )}
          </View>
          <Button
            radius={"md"}
            buttonStyle={styles.applyButton}
            onPress={navigateToAplly}
            loading={loadingApply}
          >
            {item.user_type === USER_TYPES.COMPANY
              ? "Send a file"
              : item.user_type === USER_TYPES.VENUE
              ? "Send message"
              : null}
            {item.user_type === USER_TYPES.COMPANY ? (
              <Ionicons name="add" size={32} color="white" />
            ) : item.user_type === USER_TYPES.VENUE ? (
              <Entypo name="message" size={32} color="white" />
            ) : null}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
});

export default PostCompany;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#ccc",
    margin: 10,
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: "green",
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
  },
  skeleton: {
    margin: 15,
  },
  username: {
    color: "#f1f1f1",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    zIndex: 2,
  },
  locationText: {
    marginLeft: 4,
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    opacity: 0.7,
  },
  icon: {},
  locationContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    alignItems: "center",
  },
  profileNameContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#303030e1",
    opacity: 0.9,
  },
  chipContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});
