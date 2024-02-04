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
        if (mediaKey !== "" && mediaKey !== undefined && mediaKey !== null) {
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
  const { imageKey = "", size, accessory, url = null } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      try {
        if (imageKey !== "" && url === null) {
          const result = await Storage.get(imageKey, {
            validateObjectExistence: true,
          });
          setMediaUrl(result);
        } else if (url !== null) {
          setMediaUrl(url);
        }
      } catch (error) {
        setMediaUrl("");
      }
    }
    getMediaUrl();
  }, [imageKey, url]);
  return (
    <>
      {mediaUrl !== "" ? (
        <Avatar
          rounded
          size={size}
          source={{ uri: mediaUrl }}
          containerStyle={{
            backgroundColor: "transparent",
          }}
        >
          <Skeleton
            circle
            width={size}
            height={size}
            style={{
              position: "absolute",
              zIndex: -1,
              borderRadius: size / 2,
            }}
          />

          {accessory && <Avatar.Accessory size={50} onPress={accessory} />}
        </Avatar>
      ) : (
        <Avatar
          rounded
          size={size}
          icon={{ name: "user", type: "font-awesome", color: "#4a4a4a" }}
          containerStyle={{
            backgroundColor: "#CCC",
          }}
        >
          {accessory && <Avatar.Accessory size={50} onPress={accessory} />}
        </Avatar>
      )}
    </>
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
