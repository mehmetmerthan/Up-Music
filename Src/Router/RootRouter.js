import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";
import AuthStack from "./StackScreen/AuthStack";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import Ex from "../ex";
import { LogBox } from "react-native";
export default function Router() {
  const [redirect, setRedirect] = useState(null);
  const [screenIndex, setScreenIndex] = useState(0);
  Amplify.configure(awsconfig);
  async function listenToAutoSignInEvent() {
    try {
      await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setRedirect(true);
    } catch (error) {
      setRedirect(false);
      console.log("root router catch", error);
    }
  }
  useEffect(() => {
    LogBox.ignoreLogs(["new NativeEventEmitter"]);
    LogBox.ignoreAllLogs();
    listenToAutoSignInEvent();
  }, []);
  return (
    <NavigationContainer
      onStateChange={(state) => {
        setScreenIndex(state.index);
      }}
    >
      {redirect === true ? (
        <BottomTab screenIndex={screenIndex} />
      ) : redirect === false ? (
        <AuthStack />
      ) : null}
    </NavigationContainer>
    // <Ex />
  );
}
