import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import UITag from "../../Components/tag";
import MediaPicker from "../../Components/MediaPicker";
export default function CreatePostScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);

  function submitPost() {
    setLoading(!isLoading);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <MediaPicker />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <View style={styles.divider} />
        <Text style={styles.header}>Select Categories</Text>
        <UITag />
        <TouchableOpacity style={styles.button} onPress={submitPost}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.text}>Share</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
