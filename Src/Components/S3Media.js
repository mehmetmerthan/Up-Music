import { Image, StyleSheet, ActivityIndicator } from "react-native";
import { React, useState, useEffect } from "react";
import { Avatar } from "@rneui/themed";
import { Storage } from "aws-amplify";
import { Skeleton } from "@rneui/themed";
export function S3ImageAvatar(props) {
  const { imageKey, size } = props;
  const [mediaUrl, setMediaUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getMediaUrl() {
      setLoading(true);
      try {
        const result = await Storage.get(imageKey, {
          validateObjectExistence: true,
        });
        setMediaUrl(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (imageKey && !mediaUrl) {
      getMediaUrl();
    }
  }, [imageKey, mediaUrl]);
  return (
    <>
      {loading ? (
        <Skeleton
          circle
          width={size}
          height={size}
          style={{
            borderRadius: size / 2,
          }}
        />
      ) : mediaUrl ? (
        <Avatar
          rounded
          size={size}
          source={{ uri: mediaUrl }}
          containerStyle={{
            backgroundColor: "transparent",
          }}
        />
      ) : (
        <Avatar
          rounded
          size={size}
          icon={{ name: "user", type: "font-awesome", color: "#4a4a4a" }}
          containerStyle={{
            backgroundColor: "#CCC",
          }}
        ></Avatar>
      )}
    </>
  );
}

export function S3ImageProfile(props) {
  const { imageKey = "", size } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      try {
        if (imageKey !== "") {
          const result = await Storage.get(imageKey, {
            validateObjectExistence: true,
          });
          setMediaUrl(result);
        }
      } catch (error) {
        setMediaUrl("");
      }
    }
    getMediaUrl();
  }, [imageKey]);
  return (
    <>
      {mediaUrl !== "" ? (
        <Image
          source={{ uri: mediaUrl }}
          style={{
            backgroundColor: "transparent",
            width: "100%",
            height: 260,
            resizeMode: "cover",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        ></Image>
      ) : (
        <Image
          source={require("../../assets/Design.png")}
          style={{
            backgroundColor: "transparent",
            width: "100%",
            height: size,
          }}
        />
      )}
    </>
  );
}

export async function getS3ImageUrl(props) {
  const { imageKey } = props;
  const [mediaUrl, setMediaUrl] = useState("");
  useEffect(() => {
    async function getMediaUrl() {
      try {
        const result = await Storage.get(imageKey, {
          validateObjectExistence: true,
        });
        setMediaUrl(result);
      } catch (error) {
        setMediaUrl("");
      }
    }
    getMediaUrl();
  }, [imageKey]);
  return mediaUrl;
}

const styles = StyleSheet.create({});
