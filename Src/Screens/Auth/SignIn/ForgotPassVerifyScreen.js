import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
const ForgotPassVerifyScreen = ({ route }) => {
  const { t } = useTranslation();
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const initialValues = {
    code: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required(t("codeRequired")),
    newPassword: Yup.string()
      .min(8, t("passwordLength"))
      .matches(/[A-Z]/, t("passwordContainUppercase"))
      .matches(/[a-z]/, t("passwordContainLowercase"))
      .matches(/[0-9]/, t("passwordContainNumber"))
      .matches(/[^A-Za-z0-9]/, t("passwordContainSpecial"))
      .required(t("passwordRequired")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], t("passwordNotMatch"))
      .required(t("confirmPasswordRequired")),
  });
  const email = route.params?.email;
  const handleChangePassword = async (values) => {
    setError(null);
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(email, values.code, values.newPassword);
      navigation.navigate("SignInScreen");
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Toast />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleChangePassword}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.subContainer}>
            <View style={styles.inputGroup}>
              {error && <Text style={styles.baseError}>{error}</Text>}
              <Text style={styles.header}> {t("enterCode")}</Text>
              <Text style={styles.subText}>{t("code")}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("code")}
                  onBlur={handleBlur("code")}
                  value={values.code}
                  placeholder={t("code")}
                  keyboardType="numeric"
                />
              </View>
              {touched.code && errors.code && (
                <Text style={styles.error}>{errors.code}</Text>
              )}
              <Text style={styles.subText}>{t("newPassword")}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  placeholder={t("newPassword")}
                  secureTextEntry={!showPasswordNew}
                  autoCapitalize="none"
                />
                <Pressable onPress={() => setShowPasswordNew(!showPasswordNew)}>
                  {showPasswordNew ? (
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
              {touched.newPassword && errors.newPassword && (
                <Text style={styles.error}>{errors.newPassword}</Text>
              )}
              <Text style={styles.subText}>{t("confirmNewPassword")}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder={t("confirmNewPassword")}
                  secureTextEntry={!showPasswordNew}
                  autoCapitalize="none"
                />
                <Pressable onPress={() => setShowPasswordNew(!showPasswordNew)}>
                  {showPasswordNew ? (
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
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
            </View>
            <Button
              onPress={handleSubmit}
              title={t("changePassword")}
              buttonStyle={styles.button}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  subContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  inputGroup: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    flex: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
  button: {
    borderRadius: 8,
    marginBottom: 50,
    marginHorizontal: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  subText: {
    color: "#333",
    marginVertical: 6,
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
  baseError: {
    color: "red",
    textAlign: "center",
    marginBottom: 50,
    fontSize: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "center",
    color: "#7e7676",
  },
});

export default ForgotPassVerifyScreen;
