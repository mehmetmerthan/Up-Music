import { TextInput, Text, View, ScrollView, StyleSheet, Image } from "react-native";
import { React, useState } from "react";
import styles from "../../Styles/Create/CreateEventStyle";
import StyleTag from "../../Components/TagComponents/StyleTag";
import { Divider, Button, Dialog } from "@rneui/themed";
import { useLocation } from "../../Components/PickerComponents/useLocation";
import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import useMedia from "../../Components/PickerComponents/useMedia";
export default function CreateEventScreen() {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isVisibleUser, setVisibleUser] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "John Doe",
      value: "1",
      icon: () => (
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          style={dropdownStyles.iconStyle}
        />
      ),
    },
    {
      label: "mr watson",
      value: "2",
      icon: () => (
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
          style={dropdownStyles.iconStyle}
        />
      ),
    },
  ]);
  const { MediaPicker, image } = useMedia();
  const { LocationPicker, location } = useLocation();
  function submitPost() {
    setLoading(!isLoading);
    console.log({ location });
  }

  const dropdownStyles = StyleSheet.create({
    iconStyle: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
  });
  return (

    <ScrollView keyboardShouldPersistTaps="handled">
      <MediaPicker />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Write something"
        value={text}
      />
      <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
      <LocationPicker />
      <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
      <View>
        <Button
          title="Invite friends"
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          type="outline"
          titleStyle={{ color: "black" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          icon={<Feather name="send" size={24} color="black" />}
          onPress={() => setVisibleUser(true)}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Dialog
          isVisible={isVisibleUser}
          onBackdropPress={() => setVisibleUser(false)}
        >
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Add partipicants</Text>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 15,
              }}
            >
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                mode="SIMPLE"
                searchable={true}
              />
            </View>
          </View>
        </Dialog>
      </View>
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
    </ScrollView>

  );
}
