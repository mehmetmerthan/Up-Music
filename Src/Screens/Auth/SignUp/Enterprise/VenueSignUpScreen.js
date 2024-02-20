import { React, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import signUp from "../../../../Utils/Auth/SignUp";
const validationSchema = yup.object().shape({
  fistname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "password must be least 8 characters")
    .matches(/[A-Z]/, "password must contain at least one uppercase letter")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
    .matches(/[0-9]/, "password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "password must contain at least one special character"
    )
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const VenueSignUpScreen = ({ route }) => {
  const { selectedLocation, image } = route?.params || {};
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
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
      });
      navigation.navigate("VerifyEmailScreen", {
        email: values.email,
        password: values.password,
        user_type: "venue",
        location: selectedLocation,
        urlPP: image,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
      if (error.code === "UsernameExistsException") {
        setError(null);
        return alert("Username already exists");
      }
    }
    setLoading(false);
    setError(null);
  };

  return (
    <View style={styles.containerLabel}>
      <Formik
        initialValues={{
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
            <View>
              <Text style={styles.subText}> Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={styles.subText}> Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Text style={styles.subText}> Password confirm</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <Button
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={styles.buttonRegister}
              title={"SignUp"}
              titleStyle={styles.buttonTextRegister}
            />
          </View>
        )}
      </Formik>
      <Button
        title={"Have an account?"}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        onPress={navigateToSignIn}
        type="outline"
        loading={loading2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLabel: {
    flex: 1,
    padding: 10,
  },
  errorText: {
    color: "#ff0000c5",
    marginBottom: 8,
    marginLeft: 12,
  },
  input: {
    height: 40,
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
});

export default VenueSignUpScreen;
