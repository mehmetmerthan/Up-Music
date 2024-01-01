import { View, Image, StyleSheet } from "react-native";
import { React, useState, useEffect } from "react";
import { Avatar } from "@rneui/themed";
import { Storage } from "aws-amplify";
import { Skeleton } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Fontisto } from "@expo/vector-icons";
export function S3PostMedia(props) {
  const { mediaType, key } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      const result = await Storage.get(key);
      setMediaUrl(result);
    }
    getMediaUrl();
  }, [key]);
  function S3PostMediaComponent() {
    if (mediaType === "image") {
      return <S3Image mediaUrl={mediaUrl} />;
    } else if (mediaType === "video") {
      return <S3Video mediaUrl={mediaUrl} />;
    } else {
      return "";
    }
  }
  return { S3PostMediaComponent };
}
function S3Image({ mediaUrl }) {
  return (
    <Image
      source={{
        uri: mediaUrl,
      }}
    />
  );
}

function S3Video({ mediaUrl }) {
  return {};
}

export function S3ImageAvatar(props) {
  const { imageKey = "", size, accessory,url="" } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      try {
        if (imageKey !== ""&& url === "") {
          const result = await Storage.get(imageKey, {
            validateObjectExistence: true,
          });
          setMediaUrl(result);
        }else if(url !== ""){
          setMediaUrl(url)
        }
      } catch (error) {
        setMediaUrl("");
      }
    }
    getMediaUrl();
  }, [imageKey,url]);
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
