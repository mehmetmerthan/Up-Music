import { View, DevSettings, StyleSheet, Text, Image } from "react-native";
import { React, useState } from "react";
import { Button, Dialog } from "@rneui/themed";
import { Auth, API } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import * as mutations from "../../graphql/mutations";
import { listPostsIds } from "../../Utils/Queries/postQueries";
import { useTranslation } from "react-i18next";
import DropDownPicker from "react-native-dropdown-picker";
export default function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const [isLoadingReload, setIsLoadingReload] = useState(false);
  const [isLoadingChangeLanguage, setIsLoadingChangeLanguage] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    {
      label: "English",
      value: "en",
      icon: () => (
        <Image source={require("../../../assets/images/Flag/uk16.png")} />
      ),
    },
    {
      label: "Türkçe",
      value: "tr",
      icon: () => (
        <Image source={require("../../../assets/images/Flag/tur16.png")} />
      ),
    },
  ]);
  const navigation = useNavigation();
  async function handleSignOut() {
    setIsLoadingReload(true);
    try {
      await Auth.signOut();
      setTimeout(() => {
        DevSettings.reload();
      }, 2000);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  async function handleDeleteAccount() {
    const res = await Auth.currentAuthenticatedUser();
    const uId = res.attributes.sub;
    setLoading(true);
    try {
      const resPost = await API.graphql({
        query: listPostsIds,
        variables: { input: { userPostsId: uId } },
      });
      const postIds = resPost?.data?.listPosts?.items?.map((post) => post.id);
      if (postIds.length > 0) {
        for (let i = 0; i < postIds.length; i++) {
          await API.graphql({
            query: mutations.deletePost,
            variables: { input: { id: postIds[i] } },
          });
        }
      }
      await API.graphql({
        query: mutations.deleteUser,
        variables: { input: { id: uId } },
      });
    } catch (error) {
      console.log("Error deleting user on api", error);
    }
    try {
      const result = await Auth.deleteUser();
      console.log(result);
    } catch (error) {
      console.log("Error deleting user", error);
    }
    DevSettings.reload();
    setLoading(false);
  }
  function handleLanguageChange(item) {
    setIsLoadingChangeLanguage(true);
    i18n.changeLanguage(item.value);
    setIsLoadingChangeLanguage(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{t("language")}</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          containerStyle={styles.dropdownContainer}
          onSelectItem={(item) => {
            handleLanguageChange(item);
          }}
          loading={isLoadingChangeLanguage}
          mode="BADGE"
        />
        <Button
          title={t("changePassword")}
          onPress={() => navigation.navigate("ChangePasswordScreen")}
          buttonStyle={styles.buttonProperty}
        />
        <Button
          title={t("signOut")}
          onPress={handleSignOut}
          loading={isLoadingReload}
          buttonStyle={styles.buttonProperty}
        />
        <Button
          title={t("readPolicy")}
          onPress={() => navigation.navigate("PolicyScreen")}
          buttonStyle={styles.buttonProperty}
          type="outline"
        />
      </View>
      <Button
        title={t("contact")}
        onPress={() => console.log("Contact Us")}
        buttonStyle={styles.buttonProperty}
        type="outline"
      />
      <Button
        title={t("deleteAccount")}
        onPress={() => setVisible(true)}
        buttonStyle={styles.buttonProperty}
        color={"#ff5757ff"}
      />
      <Dialog isVisible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Title title="Delete Account" />
        <Text>{t("deleteAccountAlert")}</Text>
        <Dialog.Actions>
          <Dialog.Button
            title={t("cancel")}
            onPress={() => setVisible(false)}
            disabled={loading}
          />
          <Dialog.Button
            title={t("deleteAccount")}
            onPress={handleDeleteAccount}
            loading={loading}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonProperty: {
    marginVertical: 20,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  dropdownContainer: {
    height: 40,
    width: 200,
    marginVertical: 20,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "transparent",
    borderColor: "#919191",
  },
  text: {
    fontSize: 20,
    fontWeight: "300",
    alignSelf: "center",
  },
  switch: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
});
