import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { React, useState, useEffect } from "react";
import { Avatar } from "@rneui/themed";
import { Storage } from "aws-amplify";
import { Skeleton } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
export function S3PostMedia(props) {
  const { mediaType = "", mediaKey = "" } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      try {
        if (mediaKey !== "") {
          const result = await Storage.get(mediaKey, {
            validateObjectExistence: true,
          });
          setMediaUrl(result);
        }
      } catch (error) {
        console.log("S3 post media error", error);
        setMediaUrl("");
      }
    }
    getMediaUrl();
  }, [mediaKey]);
  return (
    <View style={styles.container}>
      {mediaType === "image" && mediaUrl !== "" ? (
        <S3Image mediaUrl={mediaUrl} />
      ) : mediaType === "video" && mediaUrl !== "" ? (
        <S3Video mediaUrl={mediaUrl} />
      ) : null}
    </View>
  );
}
function S3Image({ mediaUrl }) {
  return (
    <Image
      source={{
        uri: mediaUrl,
      }}
      style={{
        width: "100%",
        height: 300,
        marginTop: 10,
        borderRadius: 5,
        resizeMode: "cover",
      }}
    />
  );
}

function S3Video({ mediaUrl }) {
  return null;
}

export function S3ImageAvatar(props) {
  const { imageKey = "", size, accessory, url = "" } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      try {
        if (imageKey !== "" && url === "") {
          const result = await Storage.get(imageKey, {
            validateObjectExistence: true,
          });
          setMediaUrl(result);
        } else if (url !== "") {
          setMediaUrl(url);
        }
      } catch (error) {
        setMediaUrl("");
      }
    }
    getMediaUrl();
  }, [imageKey, url]);
  return (
    <Avatar
      rounded
      size={size}
      source={mediaUrl !== "" ? { uri: mediaUrl } : {}}
      containerStyle={{
        backgroundColor: "transparent",
      }}
    >
      <LinearGradient
        colors={["#ff7e5f", "#feb47b"]}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          position: "absolute",
          zIndex: -1,
        }}
      />
      {accessory && <Avatar.Accessory size={50} onPress={accessory} />}
    </Avatar>
  );
}

const styles = StyleSheet.create({
  userProfileTopBg: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "",
    height: "",
  },
});
