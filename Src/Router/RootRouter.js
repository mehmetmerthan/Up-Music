import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";
import AuthStack from "./StackScreen/AuthStack";
import { Amplify, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';
import Ex from "../ex";
export default function Router() {
  const [redirect, setRedirect] = useState(false);
  Amplify.configure(awsconfig);
  function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
      const { event } = payload;
      if (event === 'autoSignIn') {
        setRedirect(true);
      } else if (event === 'autoSignIn_failure') {
        setRedirect(false);
      }
    });
  }
  useEffect(() => {
    listenToAutoSignInEvent();
  }, []);
  return (
    <NavigationContainer>
      {/* <Ex /> */}
      {redirect ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}
