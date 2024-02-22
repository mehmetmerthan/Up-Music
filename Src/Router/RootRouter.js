import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";
import AuthStack from "./StackScreen/AuthStack";
import { Amplify, Auth, API } from "aws-amplify";
import awsconfig from "../aws-exports";
import Ex from "../ex";
import * as queries from "../graphql/queries";
import CompleteProfileScreen from "../Screens/Auth/SignIn/CompleteProfileScreen";
import { LogBox } from "react-native";
export default function Router() {
  const [redirect, setRedirect] = useState(null);
  //const [completeProfile, setCompleteProfile] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  Amplify.configure(awsconfig);
  async function listenToAutoSignInEvent() {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const { attributes } = user;
      //const email_verified = attributes.email_verified;
      setRedirect(true);
      
      // if (email_verified === false) {
      //   setRedirect(false);
      //   return;
      // }
      // const id = attributes.sub;
      // x(id);
    } catch (error) {
      setRedirect(false);
      console.log("root router catch", error);
    }
  }
  // async function x(id) {
  //   const user = await API.graphql({
  //     query: queries.listUsers,
  //     variables: { filter: { id: { eq: id } } },
  //   });
  //   if (user.data.listUsers.items.length === 0) {
  //     setCompleteProfile(true);
  //   } else {
  //     setRedirect(true);
  //   }
  // }
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
      {/* {completeProfile && (
        <CompleteProfileScreen
          setCompleteProfile={setCompleteProfile}
          setRedirect={setRedirect}
        />
      )} */}
      {redirect === true ? (
        <BottomTab screenIndex={screenIndex} />
      ) : redirect === false ? (
        <AuthStack />
      ) : null}
    </NavigationContainer>
    // <Ex />
  );
}
