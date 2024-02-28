import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { React, useEffect, useState } from "react";
import { Audio, Video, ResizeMode } from "expo-av";
import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";
import { Storage } from "aws-amplify";
export default function Media({ uri, type, fileKey }) {
  const [url, setUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (fileKey) {
      async function downloadFile() {
        try {
          res = await Storage.get(fileKey);
          setUrl(res);
        } catch (error) {
          console.log("Error downloading file: ", error);
        }
      }
      downloadFile();
    } else {
      setUrl(uri);
    }
    setIsLoaded(true);
  }, [uri, fileKey, type]);
  return (
    <View>
      {isLoaded && (
        <>
          {type === "audio/mpeg" && url ? (
            <AudioComponent uri={url} />
          ) : type === "video/mp4" && url ? (
            <VideoComponent uri={url} />
          ) : (
            <Text>File type not supported</Text>
          )}
        </>
      )}
    </View>
  );
}

function VideoComponent({ uri }) {
  return (
    <Video
      source={{ uri: uri }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      style={{ width: 300, height: 300 }}
    />
  );
}
function AudioComponent({ uri }) {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: false }
    );
    setSound(sound);
    setIsLoaded(true);
    const { durationMillis } = await sound.getStatusAsync();
    setDuration(durationMillis);
  }

  useEffect(() => {
    loadSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (sound && isPlaying) {
        const status = await sound.getStatusAsync();
        setPosition(status.positionMillis);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  async function playSound() {
    await sound.playAsync();
    setIsPlaying(true);
  }

  async function pauseSound() {
    await sound.pauseAsync();
    setIsPlaying(false);
  }

  async function seekTo(position) {
    await sound.setPositionAsync(position);
    setPosition(position);
  }

  const handleSliderChange = (value) => {
    seekTo(value);
  };
  function formatTime(time) {
    const totalSeconds = time / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <View>
      {isLoaded && (
        <View style={styles.column}>
          {isPlaying ? (
            <Pressable onPress={pauseSound}>
              <AntDesign name="pausecircleo" size={30} color="grey" />
            </Pressable>
          ) : (
            <Pressable onPress={playSound}>
              <AntDesign name="playcircleo" size={30} color="grey" />
            </Pressable>
          )}
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
          />
          <Text>{formatTime(duration - position)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "orange",
    marginBottom: 10,
  },
});
