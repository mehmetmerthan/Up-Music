import { React, useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import styles from "../../Styles/OnBoardingStyle";
const WelcomeScreen = () => {
  const [isLoadingLeft, setIsLoadingLeft] = useState(false);
  const [isLoadingRight, setIsLoadingRight] = useState(false);
  const navigation = useNavigation();
  function navigateToNextScreen() {
    setIsLoadingRight(true);
    navigation.navigate("SelectionScreen");
    setIsLoadingRight(false);
  }
  function navigateToSignIn() {
    setIsLoadingLeft(true);
    navigation.navigate("SignInScreen");
    setIsLoadingLeft(false);
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="SignIn"
          onPress={navigateToSignIn}
          buttonStyle={styles.buttonLeft}
          type="outline"
          loading={isLoadingLeft}
        />
        <Button
          title="SignUp"
          onPress={navigateToNextScreen}
          buttonStyle={styles.buttonRight}
          loading={isLoadingRight}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
