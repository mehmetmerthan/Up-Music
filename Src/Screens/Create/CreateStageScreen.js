import { TextInput, Text, View, ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateStageStyle";
import StyleTag from "../../Components/TagComponents/StyleTag";
import useMedia from "../../Components/PickerComponents/useMedia";
import { Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/useLocation";
export default function CreateStageScreen() {
  const [text, onChangeText] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const { MediaPicker, image } = useMedia();
  const { LocationPicker, location } = useLocation();
  function submitPost() {
    setLoading(!isLoading);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <MediaPicker />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something about your stage"
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Set Price</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.priceInput}
          onChangeText={setPrice}
          placeholder="20$ per hour"
          value={price}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <LocationPicker />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <StyleTag />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
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
