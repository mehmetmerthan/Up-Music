import { React, useState } from "react";
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import signIn from "../../Utils/Auth/SignIn";
import { Auth } from "aws-amplify";
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "password must be least 8 characters")
    .required("password is required"),
});
const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  function navigateToSignUp() {
    setLoading2(true);
    navigation.navigate("OnboardingScreen1");
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
          password: values.password,
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
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.image}
        />
      </View>

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
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
            <Button
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={styles.buttonRegister}
              title={"LogIn"}
              titleStyle={styles.buttonTextRegister}
            />
          </View>
        )}
      </Formik>
      <Button
        loading={loading2}
        title={"Create new account"}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
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
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  imageContainer: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.142)",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
});

export default SignInScreen;
