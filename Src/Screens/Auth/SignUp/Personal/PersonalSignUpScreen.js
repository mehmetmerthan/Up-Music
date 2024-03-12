import { React, useState } from "react";
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Button, Dialog } from "@rneui/themed";
import signUp from "../../../../Utils/Auth/SignUp";
import { USER_TYPES } from "../../../../../Constants/Enums/UserTypes";
import { useTranslation } from "react-i18next";
import Policy from "../Policy";

const PersonalSignUpScreen = ({ route }) => {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    name: yup.string().required(t("nameRequired")),
    email: yup
      .string()
      .email(t("entervalidemail"))
      .required(t("emailRequired")),
    password: yup
      .string()
      .min(8, t("passwordLength"))
      .matches(/[A-Z]/, t("passwordContainUppercase"))
      .matches(/[a-z]/, t("passwordContainLowercase"))
      .matches(/[0-9]/, t("passwordContainNumber"))
      .matches(/[^A-Za-z0-9]/, t("passwordContainSpecial"))
      .required(t("passwordRequired")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], t("passwordNotMatch")),
  });
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const {
    selectedStyleTags = [],
    selectedRoleTags = [],
    about = "",
    location = "",
    image = "",
    experiences = [],
  } = route?.params || {};
  const navigation = useNavigation();
  function navigateToSignIn() {
    setLoading2(true);
    navigation.navigate("SignInScreen");
    setLoading2(false);
  }
  const handleRegistration = async (values) => {
    setLoading(true);
    try {
      await signUp({
        username: values.email,
        password: values.password,
        name: values.name,
        about: about,
        urlPP: image,
        location: location,
        tagStyle: selectedStyleTags,
        tagRole: selectedRoleTags,
        experiencesData: experiences,
        user_type: USER_TYPES.PERSONAL,
      });
      navigation.navigate("VerifyEmailScreen", {
        email: values.email,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
      if (error.code === "UsernameExistsException") {
        setError(null);
        return alert(t("userExist"));
      }
    }
    setLoading(false);
    setError(null);
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <Text style={styles.headerText}>{t("register")}</Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
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
              <Text style={styles.subText}>{t("artistName")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("artistName")}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <Text style={styles.subText}> {t("email")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("email")}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={styles.subText}> {t("password")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("password")}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
                autoCapitalize="none"
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Text style={styles.subText}> {t("confirmPassword")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("confirmPassword")}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
                autoCapitalize="none"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <Pressable onPress={() => setVisible(true)}>
              <Text style={styles.policyText}>{t("clickPolicy")}</Text>
            </Pressable>
            <Dialog
              isVisible={visible}
              onBackdropPress={() => setVisible(false)}
              onDismiss={() => setVisible(false)}
            >
              <Policy
                setChecked={setChecked}
                checked={checked}
                setVisible={setVisible}
              />
            </Dialog>
            <Button
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={styles.buttonRegister}
              title={t("signUp")}
              titleStyle={styles.buttonTextRegister}
              disabled={!checked}
              disabledStyle={{ backgroundColor: "#d4d4d47e" }}
              color={"black"}
            />
          </View>
        )}
      </Formik>
      <Button
        title={t("haveAccount")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={navigateToSignIn}
        type="outline"
        loading={loading2}
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
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
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
  policyText: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 16,
    marginLeft: 12,
    textAlign: "left",
  },
  buttonRegister: {
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 50,
  },
  buttonTextRegister: {
    color: "#fff",
  },
});

export default PersonalSignUpScreen;
