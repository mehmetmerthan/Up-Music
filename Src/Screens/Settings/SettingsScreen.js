import { View, DevSettings, StyleSheet, Text } from "react-native";
import { React, useState } from "react";
import { Button, Dialog } from "@rneui/themed";
import { Auth, API } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import * as mutations from "../../graphql/mutations";
import { listPostsIds } from "../../Utils/Queries/postQueries";
import { useTranslation } from "react-i18next";
export default function SettingsScreen() {
  const { t } = useTranslation();
  const [isLoadingReload, setIsLoadingReload] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
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
});
