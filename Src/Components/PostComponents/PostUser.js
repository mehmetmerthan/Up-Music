import { SafeAreaView, View, Text, Pressable } from "react-native";
import { React, useEffect, useState, memo } from "react";
import styles from "../../Styles/userPostStyle";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Chip, Skeleton, Image } from "@rneui/themed";
import Experieces from "../Experiences";
import { Storage } from "aws-amplify";
import { useTranslation } from "react-i18next";
const PostUser = memo(({ item }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState(null);
  const navigation = useNavigation();
  function navigateToUserDetail() {
    navigation.navigate("UserDetailScreen", { userId: item?.id });
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
  }, [item?.key_pp]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable style={styles.userInfo} onPress={navigateToUserDetail}>
          {loading ? (
            <Skeleton width={"auto"} height={260} style={styles.skeleton} />
          ) : (
            <>
              {imgUrl ? (
                <Image
                  source={{ uri: imgUrl }}
                  PlaceholderContent={<Skeleton width={"100%"} height={250} />}
                  style={{ resizeMode: "cover" }}
                  containerStyle={{
                    width: "100%",
                    height: 250,
                    resizeMode: "cover",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
              ) : (
                <FontAwesome name="user-circle-o" size={200} color="#000000" />
              )}
            </>
          )}
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
        {item?.tag_roles?.length > 0 && (
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
        {item?.tag_Styles?.length > 0 && (
          <View style={styles.sectionRole}>
            <Text style={styles.sectionHeadingTextRole}>
              {t("musicStyles")}
            </Text>
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
        )}
        {item?.experiences?.length > 0 && (
          <Experieces experiencesData={item?.experiences} />
        )}
      </View>
    </SafeAreaView>
  );
});

export default PostUser;
