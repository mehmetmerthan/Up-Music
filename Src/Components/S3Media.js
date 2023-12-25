import { View, Image, StyleSheet } from "react-native";
import { React, useState, useEffect } from "react";
import { Avatar } from "@rneui/themed";
import { Storage } from "aws-amplify";
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
  const { imageKey = "", size, accessory, url = "" } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      if (imageKey !== "" && url === "") {
        try {
          const result = await Storage.get(imageKey, {
            validateObjectExistence: true,
          });
          setMediaUrl(result);
        } catch (error) {
          setMediaUrl("");
        }
      } else {
        setMediaUrl(url);
      }
    }
    getMediaUrl();
  }, [imageKey, url]);
  return (
    <Avatar
      rounded
      size={size}
      source={{
        uri: mediaUrl != "" ? mediaUrl : "https://picsum.photos/200/400",
      }}
    >
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
