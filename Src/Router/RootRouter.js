import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";
import AuthStack from "./StackScreen/AuthStack";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import Ex from "../ex";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
export default function Router() {
  const { i18n } = useTranslation();
  const [redirect, setRedirect] = useState(null);
  const [screenName, setScreenName] = useState("");
  const [isReady, setIsReady] = useState(false);
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
    getLang();
  }, []);
  const navigationRef = useNavigationContainerRef();
  async function getLang() {
    try {
      const value = await AsyncStorage.getItem("selectedLang");
      if (value !== null) {
        i18n.changeLanguage(value);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setIsReady(true);
      }}
      onStateChange={() => {
        if (isReady) {
          const currentRouteName = navigationRef.getCurrentRoute().name;
          setScreenName(currentRouteName);
        }
      }}
    >
      {redirect === true ? (
        <BottomTab screenName={screenName} />
      ) : redirect === false ? (
        <AuthStack />
      ) : null}
    </NavigationContainer>
    // <Ex />
  );
}
