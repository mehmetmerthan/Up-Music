import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";
import AuthStack from "./StackScreen/AuthStack";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import Ex from "../ex";
export default function Router() {
  const [redirect, setRedirect] = useState(null);
  Amplify.configure(awsconfig);
  async function listenToAutoSignInEvent() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      const email_verified = attributes.email_verified;
      setRedirect(email_verified);
    } catch (error) {
      setRedirect(false);
    }
  }
  useEffect(() => {
    listenToAutoSignInEvent();
  }, []);
  return (
    <NavigationContainer>
      {redirect === true ? (
        <BottomTab />
      ) : redirect === false ? (
        <AuthStack />
      ) : null}
    </NavigationContainer>
  );
}
