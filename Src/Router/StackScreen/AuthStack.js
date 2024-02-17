import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalSignUpScreen from "../../Screens/Auth/SignUp/Personal/PersonalSignUpScreen";
import EnterpriseSignUpScreen from "../../Screens/Auth/SignUp/Enterprise/EnterpriseSignUpScreen";
import SignInScreen from "../../Screens/Auth/SignIn/SignInScreen";
import VerifyEmailScreen from "../../Screens/Auth/SignUp/VerifyEmailScreen";
import ForgotPassScreen from "../../Screens/Auth/SignIn/ForgotPassScreen";
import ForgotPassVerifyScreen from "../../Screens/Auth/SignIn/ForgotPassVerifyScreen";
import ForgotPassNewPassScreen from "../../Screens/Auth/SignIn/ForgotPassNewPassScreen";
import ResetPassScreen from "../../Screens/Auth/SignIn/ResetPassScreen";
import WelcomeScreen from "../../Screens/Auth/WelcomeScreen";
import SelectionScreen from "../../Screens/Auth/SignUp/SelectionScreen";
import EnterpriseSelectionScreen from "../../Screens/Auth/SignUp/Enterprise/EnterpriseSelectionScreen";
import OnboardingScreen1 from "../../Screens/Auth/SignUp/Personal/OnboardingScreen1";
import OnboardingScreen2 from "../../Screens/Auth/SignUp/Personal/OnboardingScreen2";
import OnboardingScreen3 from "../../Screens/Auth/SignUp/Personal/OnboardingScreen3";
import BottomTab from "../BottomTab/BottomTab";
export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        transitionSpec: {
          open: { animation: "timing", config: { duration: 600 } },
          close: { animation: "timing", config: { duration: 600 } },
        },
      }}
    >
      <Stack.Screen
        name="SignUpScreen"
        component={EnterpriseSignUpScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="PersonalSignUpScreen"
        component={PersonalSignUpScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="SelectionScreen"
        component={SelectionScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="EnterpriseSelectionScreen"
        component={EnterpriseSelectionScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: "SignIn",
        }}
      />
      <Stack.Screen
        name="VerifyEmailScreen"
        component={VerifyEmailScreen}
        options={{
          title: "Verify Email",
        }}
      />
      <Stack.Screen
        name="ForgotPassScreen"
        component={ForgotPassScreen}
        options={{
          title: "Forgot Password",
        }}
      />
      <Stack.Screen
        name="ForgotPassVerifyScreen"
        component={ForgotPassVerifyScreen}
        options={{
          title: "Forgot Password Verify",
        }}
      />

      <Stack.Screen
        name="ForgotPassNewScreen"
        component={ForgotPassNewPassScreen}
        options={{
          title: "New Password",
        }}
      />
      <Stack.Screen
        name="ResetPassScreen"
        component={ResetPassScreen}
        options={{
          title: "Reset Password",
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Welcome !" }}
      />
      <Stack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
        options={{ title: "Something" }}
      />
      <Stack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
        options={{ title: "Tell about yourself" }}
      />
      <Stack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
        options={{ title: "Have an any eperience ?" }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false, title: "" }}
      />
    </Stack.Navigator>
  );
}
