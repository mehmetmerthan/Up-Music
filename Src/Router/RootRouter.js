import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";
import OnboardingStack from "./StackScreen/OnBoardingStack";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import Ex from "../ex";
export default function Router() {
  Amplify.configure(awsconfig);
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
