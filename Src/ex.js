import { Auth } from "aws-amplify";
import { React, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
function Ex() {
  const username = "";
  const password = "";

  async function signUp() {
    try {
      const user = await Auth.signUp({
        username,
        password,
        autoSignIn: {
          enabled: true,
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  async function signIn() {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  }
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  async function getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("current user", user);
    } catch (error) {
      console.log("error getting current user", error);
    }
  }
  return (
    <View style={styles.container}>
      <Button
        onPress={signUp}
        title={"SignUp"}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        onPress={signIn}
        title={"SignIn"}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        onPress={signOut}
        title={"SignOut"}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        onPress={getCurrentUser}
        title={"GetCurrentUser"}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
}

export default Ex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 200,
    margin: 20,
  },
});
