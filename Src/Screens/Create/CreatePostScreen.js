import { TextInput, Text, View, ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreatePostStyle";
import UITag from "../../Components/tag";
import MediaPicker from "../../Components/MediaPicker";
import { Divider, Button } from "@rneui/themed";
export default function CreatePostScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);

  function submitPost() {
    setLoading(!isLoading);
  }
  return (
    <ScrollView>
      <View>
        <MediaPicker />
        <Divider orientation="vertical" style={{borderWidth:0.5}}/>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical"style={{borderWidth:0.5}}/>
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <UITag />
        <Divider orientation="vertical" style={{borderWidth:0.5}}/>
        <Button
          title="Share"
          loading={false}
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          titleStyle={{ color: "white" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          onPress={submitPost}
        />
      </View>
    </ScrollView>
  );
}
