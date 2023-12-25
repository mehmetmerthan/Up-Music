import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "../../Screens/LogIn/SignUpScreen";
import SignInScreen from "../../Screens/LogIn/SignInScreen";
import VerifyEmailScreen from "../../Screens/LogIn/VerifyEmailScreen";
import ForgotPassScreen from "../../Screens/LogIn/ForgotPassScreen";
import ForgotPassVerifyScreen from "../../Screens/LogIn/ForgotPassVerifyScreen";
import ForgotPassNewPassScreen from "../../Screens/LogIn/ForgotPassNewPassScreen";
import ResetPassScreen from "../../Screens/LogIn/ResetPassScreen";
import OnboardingScreen1 from "../../Screens/Onboarding/OnboardingScreen1";
import OnboardingScreen2 from "../../Screens/Onboarding/OnboardingScreen2";
import OnboardingScreen3 from "../../Screens/Onboarding/OnboardingScreen3";
import OnboardingScreen4 from "../../Screens/Onboarding/OnboardingScreen4";
import OnboardingScreen5 from "../../Screens/Onboarding/OnboardingScreen5";
import BottomTab from "../BottomTab/BottomTab";
import Ex from "../../ex";
import LocationPicker from "../../Components/PickerComponents/LocationPicker";
import Tag from "../../Components/TagComponents/Tag";
export default function AuthStack() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName="LocationPicker"
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
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: "SignUp",
        }}
      />
      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: "SignIn",
        }}
      />
      <AuthStack.Screen
        name="VerifyEmailScreen"
        component={VerifyEmailScreen}
        options={{
          title: "Verify Email",
        }}
      />
      <AuthStack.Screen
        name="ForgotPassScreen"
        component={ForgotPassScreen}
        options={{
          title: "Forgot Password",
        }}
      />
      <AuthStack.Screen
        name="ForgotPassVerifyScreen"
        component={ForgotPassVerifyScreen}
        options={{
          title: "Forgot Password Verify",
        }}
      />

      <AuthStack.Screen
        name="ForgotPassNewScreen"
        component={ForgotPassNewPassScreen}
        options={{
          title: "New Password",
        }}
      />
      <AuthStack.Screen
        name="ResetPassScreen"
        component={ResetPassScreen}
        options={{
          title: "Reset Password",
        }}
      />
      <AuthStack.Screen
        name="LocationPicker"
        component={LocationPicker}
        options={{
          title: "Select Location",
        }}
      />
      <AuthStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
        options={{ headerShown: false, title: "" }}
      />
      <AuthStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
        options={{ headerShown: false, title: "" }}
      />
      <AuthStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
        options={{ headerShown: false, title: "" }}
      />
      <AuthStack.Screen
        name="OnboardingScreen4"
        component={OnboardingScreen4}
        options={{ headerShown: false, title: "" }}
      />
      <AuthStack.Screen
        name="OnboardingScreen5"
        component={OnboardingScreen5}
        options={{ headerShown: false, title: "" }}
      />
      <AuthStack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false, title: "" }}
      />
      <AuthStack.Screen
        name="Ex"
        component={Ex}
        options={{ headerShown: false, title: "" }}
      />
      {/* <AuthStack.Screen
        name="Tag"
        component={Tag}
        options={{ headerShown: false, title: "" }}
      /> */}
    </AuthStack.Navigator>
  );
}
