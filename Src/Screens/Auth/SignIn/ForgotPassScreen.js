import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { Button } from "@rneui/themed";
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});
const ForgotPassScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const handleRegistration = async (values) => {
    try {
      setError(null);
      setLoading(true);
      await Auth.forgotPassword(values.email);
      navigation.navigate("ForgotPassVerifyScreen", {
        email: values.email,
      });
    } catch (error) {
      if (error.code === "UserNotFoundException") {
        setError("User not found");
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "" }}
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
          <View style={styles.innerContainer}>
            <View style={styles.subContainer}>
              {error && <Text style={styles.baseError}>{error}</Text>}
              <Text style={styles.header}>Enter your email</Text>
              <Text style={styles.subText}> Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <Button
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={styles.button}
              title={"Next"}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "center",
    color: "#7e7676",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  innerContainer: {
    justifyContent: "space-between",
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "center",
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
  baseError: {
    color: "red",
    textAlign: "center",
    marginBottom: 50,
    fontSize: 20,
  },
  button: {
    borderRadius: 8,
    marginBottom: 50,
    marginHorizontal: 50,
  },
  input: {
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  subText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default ForgotPassScreen;
