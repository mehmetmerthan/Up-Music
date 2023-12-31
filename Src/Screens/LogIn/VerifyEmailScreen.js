import { React, useState, useEffect, useCallback } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { confirmSignUp, resendSignUp } from "../../Utils/Auth/confirmSignUp";
import { Button } from "@rneui/themed";
import UploadUser from "../../Utils/Uploads/uploadUser";
const validationSchema = yup.object().shape({
  code: yup.string().required("code is required"),
});
const VerifyEmailScreen = ({ route }) => {
  const {
    tagStyle = [],
    tagRole = [],
    about = "",
    location = "",
    gender = "",
    urlPP = "",
    name,
    email,
    mediaType = "",
    age = "",
  } = route?.params || {};
  const [countdown, setCountdown] = useState(30);
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const handleRegistration = async (values) => {
    setError(null);
    setLoading(true);
    const { error } = confirmSignUp({ username: email, code: values.code });
    if (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    } else {
      await UploadUser({
        name: name,
        about: about,
        urlPP: urlPP,
        location: location,
        tagStyle: tagStyle,
        tagRole: tagRole,
        gender: gender,
        mediaType: mediaType,
        age: age,
        operationType: "create",
      });
      setLoading(false);
      navigation.navigate("SignInScreen");
    }
  };
  const handleResend = () => {
    setError(null);
    const { error } = resendSignUp({ username: email });
    if (error) {
      console.log(error);
      setError(error);
    } else {
      setCountdown(30);
      setButtonVisible(false);
      startCountdown();
      console.log("success resend");
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
      <Text style={styles.headerText}>Register</Text>
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
              <Text style={styles.subText}> verify code</Text>
              <View style={styles.containerRow}>
                <TextInput
                  style={styles.input}
                  placeholder="code"
                  onChangeText={handleChange("code")}
                  onBlur={handleBlur("code")}
                  value={values.code}
                />
                {touched.code && errors.code && (
                  <Text style={styles.errorText}>{errors.code}</Text>
                )}
              </View>
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <Button
              buttonStyle={styles.button}
              onPress={handleSubmit}
              loading={loading}
              title={"Send"}
              titleStyle={styles.buttonText}
            />
            <Button
              buttonStyle={styles.buttonRe}
              onPress={handleResend}
              title={
                buttonVisible ? "Resend code" : `Resend code (${countdown}s)`
              }
              titleStyle={styles.buttonTextRe}
              disabled={!buttonVisible}
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
    flexDirection: "row",
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
