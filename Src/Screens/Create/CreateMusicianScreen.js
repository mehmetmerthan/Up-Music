import {
  TextInput,
  Text,
  View,
  ScrollView,
} from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateGroupStyle";
import StyleTag from "../../Components/TagComponents/StyleTag";
import MusicianTag from "../../Components/TagComponents/MusicianTag";
import { Divider, Button } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/useLocation";
export default function CreateMusicianScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { LocationPicker, location } = useLocation();
  function submitPost() {
    setLoading(!isLoading);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View>
        <Text style={styles.header}>Tell about yourself</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="I am a musician..."
          value={text}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <LocationPicker />
        <Text style={styles.header}>What kind of musician are you ?</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <MusicianTag />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select music styles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <StyleTag />
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
