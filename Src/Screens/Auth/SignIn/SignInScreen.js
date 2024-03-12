import { React, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import signIn from "../../../Utils/Auth/SignIn";
import { Auth } from "aws-amplify";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const SignInScreen = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  function navigateToSignUp() {
    setLoading2(true);
    setError(null);
    navigation.navigate("SelectionLanguageScreen");
    setLoading2(false);
  }
  const handleRegistration = async (values) => {
    setError(null);
    setLoading(true);
    const { error } = await signIn({
      email: values.email,
      password: values.password,
    });
    if (error) {
      if (error.code === "UserNotConfirmedException") {
        await Auth.resendSignUp(values.email);
        navigation.navigate("VerifyEmailScreen", {
          email: values.email,
        });
        setLoading(false);
        return;
      }
      setError(error.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigation.navigate("BottomTab");
  };
  const phoneRegExp = /^\+\d{12}$/;
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required(t("emailOrPhoneRequired"))
      .test("is-valid", t("invalidEmailOrPhone"), function (value) {
        return (
          yup.string().email().isValidSync(value) || phoneRegExp.test(value)
        );
      }),
    password: yup
      .string()
      .min(8, t("passwordLength"))
      .required(t("passwordRequired")),
  });
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      extraScrollHeight={50}
    >
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.image}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
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
              <Text style={styles.subText}> {t("emailOrPhone")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("emailOrPhone")}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={styles.subText}> {t("password")}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={t("password")}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Ionicons
                      name="eye-off"
                      size={24}
                      color="black"
                      style={styles.icon}
                    />
                  ) : (
                    <Ionicons
                      name="eye"
                      size={24}
                      color="black"
                      style={styles.icon}
                    />
                  )}
                </Pressable>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Pressable
                onPress={() => {
                  setError(null);
                  navigation.navigate("ForgotPassScreen");
                }}
              >
                <Text> {t("forgotPassword")}</Text>
              </Pressable>
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}

            <Button
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={styles.buttonRegister}
              title={t("signIn")}
              titleStyle={styles.buttonTextRegister}
              color={"black"}
            />
          </View>
        )}
      </Formik>
      <Button
        loading={loading2}
        title={t("createAccount")}
        buttonStyle={[styles.button, { borderColor: "black" }]}
        titleStyle={[styles.buttonText, { color: "black" }]}
        onPress={navigateToSignUp}
        type="outline"
      />
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
  button: {
    backgroundColor: "#0000ff00",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 100,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 12,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
  subText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  button: {
    marginVertical: 15,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#000000",
  },
  buttonRegister: {
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 50,
  },
  buttonTextRegister: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
});

export default SignInScreen;
