import { TextInput, Text, View, ScrollView } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateProfStyle";
import ProfTag from "../../Components/TagComponents/ProfTag";
import { Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/useLocation";
export default function CreateProfScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { LocationPicker, location } = useLocation();
  function submitPost() {
    setLoading(!isLoading);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Write something"
          value={text}
        />
        <Divider orientation="vertical" />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <LocationPicker />
        <ProfTag />
        <Divider orientation="vertical" />
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
