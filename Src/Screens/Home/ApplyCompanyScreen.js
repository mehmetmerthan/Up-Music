import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { React, useState } from "react";
import { Button } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import uploadApply from "../../Utils/Uploads/uploadApply";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import Media from "../../Components/Media";
export default function ApplyCompanyScreen({ route }) {
  const [text, onChangeText] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const { userId, companyId } = route?.params || {};
  const navigation = useNavigation();
  async function applyToCompany() {
    if (text === "") {
      return alert("Please write something about your apply");
    }
    setLoading(true);
    try {
      await uploadApply({
        userId,
        companyId,
        message: text,
        file: file?.uri,
        fileName: file?.name,
        mimeType: file?.mimeType,
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }, { name: "MessageScreen" }],
      });
    } catch (error) {
      console.log("Error", error);
    }
    setLoading(false);
  }
  async function filePicker() {
    try {
      const res = await DocumentPicker.getDocumentAsync({ multiple: false });
      if (!res.canceled) {
        const asset = res.assets[0];
        console.log(asset.mimeType);
        const fileSizeInMB = asset.size / (1024 * 1024);
        const roundedFileSizeInMB = Math.round(fileSizeInMB);
        if (roundedFileSizeInMB > 50) {
          Alert.alert(
            "File size limit exceeded",
            "Please select a file smaller than 50MB."
          );
          return;
        }
        setFile(asset);
      } else {
        console.log("File picking cancelled or failed");
      }
    } catch (error) {
      console.error("Error picking file:", error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subText}> Write something about your apply</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={onChangeText}
          value={text}
        />
        <View style={styles.addFileContainer}>
          <View style={styles.column}>
            <Button
              radius={"lg"}
              buttonStyle={styles.addFileButton}
              onPress={filePicker}
            >
              Add file
              <AntDesign name="addfile" size={30} color="white" />
            </Button>
            <Text style={styles.mbText}>50MB</Text>
            {file && <Media uri={file?.uri} type={file?.mimeType} />}
          </View>
        </View>
      </View>
      <Button
        title={"Apply"}
        onPress={applyToCompany}
        buttonStyle={styles.buttonRegister}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "space-between",
  },
  addFileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flexDirection: "column",
  },
  mbText: {
    fontSize: 10,
    fontWeight: "400",
    marginBottom: 10,
  },
  addFileButton: {
    marginTop: 10,
    padding: 10,
    alignSelf: "flex-start",
  },
  buttonRegister: {
    backgroundColor: "green",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-start",
  },
  subText: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    marginBottom: 10,
  },
  subTextAdd: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    marginTop: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 10,
  },
});
