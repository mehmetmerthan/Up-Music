import { React, useState, useEffect, useCallback } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { confirmSignUp, resendSignUp } from "../../../Utils/Auth/confirmSignUp";
import { Button } from "@rneui/themed";
import { Auth } from "aws-amplify";
import { useTranslation } from "react-i18next";

const VerifyEmailScreen = ({ route }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    code: yup.string().required(t("codeRequired")),
  });
  const { email } = route?.params || {};
  const [countdown, setCountdown] = useState(30);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const handleRegistration = async (values) => {
    setError(null);
    setLoading(true);
    try {
      await confirmSignUp({
        username: email,
        code: values.code,
      });
      navigation.navigate("SignInScreen");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      console.log("error signing up:", error);
      setLoading(false);
      if (error.code === "NotAuthorizedException") {
        setPasswordVisible(true);
      }
    }
  };
  const sendTosignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      const user = await Auth.signIn(email, confirmPassword);
      if (user) {
        navigation.navigate("SignInScreen");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      console.log("error confirmed:", error);
      setLoading(false);
    }
  };
  const handleResend = async () => {
    setError(null);
    try {
      await resendSignUp({ username: email });
      setCountdown(30);
      setButtonVisible(false);
      startCountdown();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  const startCountdown = useCallback(() => {
    let timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(timer);
          setButtonVisible(true);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);
  }, []);
  useEffect(() => {
    startCountdown();
  }, [startCountdown]);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <Text style={styles.headerText}>{t("register")}</Text>
      <Formik
        initialValues={{ code: "" }}
        onSubmit={handleRegistration}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.container}>
              <Text style={styles.subText}> {t("verifyCode")}</Text>
              <View style={styles.containerRow}>
                <TextInput
                  style={styles.input}
                  placeholder={t("code")}
                  onChangeText={handleChange("code")}
                  onBlur={handleBlur("code")}
                  value={values.code}
                  keyboardType="numeric"
                />
                {touched.code && errors.code && (
                  <Text style={styles.errorText}>{errors.code}</Text>
                )}
                {passwordVisible && (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder={t("confirmPassword")}
                      onChangeText={(text) => setConfirmPassword(text)}
                      value={confirmPassword}
                      secureTextEntry
                    />
                    <Button
                      buttonStyle={styles.button}
                      onPress={sendTosignIn}
                      loading={loading}
                      title={t("confirmPassword")}
                      titleStyle={styles.buttonText}
                      color={"black"}
                    />
                  </>
                )}
              </View>
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}

            <Button
              buttonStyle={styles.button}
              onPress={handleSubmit}
              loading={loading}
              title={t("send")}
              titleStyle={styles.buttonText}
              disabled={passwordVisible}
              color={"black"}
            />
            <Button
              buttonStyle={styles.buttonRe}
              onPress={handleResend}
              title={
                buttonVisible ? t("resend") : `${t("resend")} (${countdown}s)`
              }
              titleStyle={styles.buttonTextRe}
              disabled={!buttonVisible || passwordVisible}
            />
          </View>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: "#ff0000c5",
    marginBottom: 8,
    marginLeft: 12,
  },
  input: {
    height: 40,
    width: "80%",
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 100,
    justifyContent: "center",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  containerRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 50,
  },
  buttonText: {
    color: "#fff",
  },
  buttonRe: {
    marginVertical: 15,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "#1dff2489",
  },
  buttonTextRe: {
    color: "#3e3e3eaa",
  },
});

export default VerifyEmailScreen;
