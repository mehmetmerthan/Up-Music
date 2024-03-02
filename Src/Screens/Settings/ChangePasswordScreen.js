import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
const ChangePasswordScreen = () => {
  const [showPasswordOld, setShowPasswordOld] = useState(false);
  const [showPasswordNew, setShowPasswordNew] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password is required"),
    newPassword: Yup.string()
      .min(8, "password must be least 8 characters")
      .matches(/[A-Z]/, "password must contain at least one uppercase letter")
      .matches(/[a-z]/, "password must contain at least one lowercase letter")
      .matches(/[0-9]/, "password must contain at least one number")
      .matches(
        /[^A-Za-z0-9]/,
        "password must contain at least one special character"
      )
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleChangePassword = async (values) => {
    setLoading(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const data = await Auth.changePassword(
        user,
        values.oldPassword,
        values.newPassword
      );

      navigation.navigate("ProfileScreen");
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
              <Text style={styles.subText}>Old password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("oldPassword")}
                  onBlur={handleBlur("oldPassword")}
                  value={values.oldPassword}
                  placeholder="Old Password"
                  secureTextEntry={!showPasswordOld}
                  autoCapitalize="none"
                />
                <Pressable onPress={() => setShowPasswordOld(!showPasswordOld)}>
                  {showPasswordOld ? (
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
              {touched.oldPassword && errors.oldPassword && (
                <Text style={styles.error}>{errors.oldPassword}</Text>
              )}
              <Text style={styles.subText}>New password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  placeholder="New Password"
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
              <Text style={styles.subText}>Confirm new password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder="Confirm New Password"
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
            {error && (
              <Text style={[styles.error, { marginBottom: 20 }]}>{error}</Text>
            )}
            <Button
              onPress={handleSubmit}
              title="Change Password"
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
});

export default ChangePasswordScreen;
