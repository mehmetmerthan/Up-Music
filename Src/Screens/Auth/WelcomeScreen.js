import { React, useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import styles from "../../Styles/WelcomeStyle";
import { useTranslation } from "react-i18next";
const WelcomeScreen = () => {
  const { t } = useTranslation();
  const [isLoadingLeft, setIsLoadingLeft] = useState(false);
  const [isLoadingRight, setIsLoadingRight] = useState(false);
  const navigation = useNavigation();
  function navigateToNextScreen() {
    setIsLoadingRight(true);
    navigation.navigate("SelectionLanguageScreen");
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
        source={require("../../../assets/Design.png")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={t("signUp")}
          onPress={navigateToNextScreen}
          buttonStyle={styles.buttonSignUp}
          loading={isLoadingRight}
        />
        <Button
          title={t("signIn")}
          onPress={navigateToSignIn}
          buttonStyle={styles.buttonSignIn}
          type="outline"
          loading={isLoadingLeft}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
