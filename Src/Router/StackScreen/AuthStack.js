import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalSignUpScreen from "../../Screens/Auth/SignUp/Personal/PersonalSignUpScreen";
import CompanySignUpScreen from "../../Screens/Auth/SignUp/Enterprise/CompanySignUpScreen";
import VenueSignUpScreen from "../../Screens/Auth/SignUp/Enterprise/VenueSignUpScreen";
import SignInScreen from "../../Screens/Auth/SignIn/SignInScreen";
import VerifyEmailScreen from "../../Screens/Auth/SignUp/VerifyEmailScreen";
import ForgotPassScreen from "../../Screens/Auth/SignIn/ForgotPassScreen";
import ForgotPassVerifyScreen from "../../Screens/Auth/SignIn/ForgotPassVerifyScreen";
import WelcomeScreen from "../../Screens/Auth/WelcomeScreen";
import SelectionScreen from "../../Screens/Auth/SignUp/SelectionScreen";
import EnterpriseSelectionScreen from "../../Screens/Auth/SignUp/Enterprise/EnterpriseSelectionScreen";
import OnboardingScreen1 from "../../Screens/Auth/SignUp/Personal/OnboardingScreen1";
import OnboardingScreen2 from "../../Screens/Auth/SignUp/Personal/OnboardingScreen2";
import OnboardingScreen3 from "../../Screens/Auth/SignUp/Personal/OnboardingScreen3";
import BottomTab from "../BottomTab/BottomTab";
import VenueGetDetailsScreen from "../../Screens/Auth/SignUp/Enterprise/VenueGetDetailsScreen";
import CompanyGetDetailsScreen from "../../Screens/Auth/SignUp/Enterprise/CompanyGetDetailsScreen";
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
        name="CompanySignUpScreen"
        component={CompanySignUpScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="VenueSignUpScreen"
        component={VenueSignUpScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="VenueGetDetailsScreen"
        component={VenueGetDetailsScreen}
        options={{
          title: "SignUp",
        }}
      />
      <Stack.Screen
        name="CompanyGetDetailsScreen"
        component={CompanyGetDetailsScreen}
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
