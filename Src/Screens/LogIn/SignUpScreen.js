import { React, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import signUp from "../../Utils/Auth/SignUp";
const validationSchema = yup.object().shape({
  fistname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  age: yup
    .number()
    .required("Age is required")
    .integer("Age must be a whole number")
    .min(18, "Age must be at least 18")
    .max(100, "Age must be less than 100"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "password must be least 6 characters")
    .required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const SignUpScreen = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const {
    selectedStyleTags = [],
    selectedRoleTags = [],
    about = "",
    location = "",
    gender = "",
    image = "",
    mediaType = "",
  } = route?.params || {};
  const navigation = useNavigation();
  function navigateToSignIn() {
    setLoading2(true);
    navigation.navigate("SignInScreen");
    setLoading2(false);
  }
  const handleRegistration = async (values) => {
    setLoading(true);
    const { error } = await signUp({
      username: values.email,
      password: values.password,
    });
    if (error) {
      console.log(error);
      setLoading(false);
      setError(error);
      if (error.code === "UsernameExistsException") {
        navigation.navigate("VerifyEmailScreen", {
          email: values.email,
          name: values.fistname + " " + values.lastname,
          age: values.age,
          about: about,
          urlPP: image,
          location: location,
          tagStyle: selectedStyleTags,
          tagRole: selectedRoleTags,
          gender: gender,
          mediaType: mediaType,
        });
      }
    } else {
      setLoading(false);
      navigation.navigate("VerifyEmailScreen", {
        email: values.email,
        name: values.fistname + " " + values.lastname,
        age: values.age,
        about: about,
        urlPP: image,
        location: location,
        tagStyle: selectedStyleTags,
        tagRole: selectedRoleTags,
        gender: gender,
      });
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scrollContainer}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <Text style={styles.headerText}>Register</Text>
      <Formik
        initialValues={{
          fistname: "",
          lastname: "",
          age: "",
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
              <Text style={styles.subText}> Firstname</Text>
              <TextInput
                style={styles.input}
                placeholder="Firstname"
                onChangeText={handleChange("fistname")}
                onBlur={handleBlur("fistname")}
                value={values.fistname}
              />
              {touched.fistname && errors.fistname && (
                <Text style={styles.errorText}>{errors.fistname}</Text>
              )}
              <Text style={styles.subText}> Lastname</Text>
              <TextInput
                style={styles.input}
                placeholder="Lastname"
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
              />
              {touched.lastname && errors.lastname && (
                <Text style={styles.errorText}>{errors.lastname}</Text>
              )}
              <Text style={styles.subText}> Age</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="age"
                onChangeText={handleChange("age")}
                onBlur={handleBlur("age")}
                value={values.age}
              />
              {touched.age && errors.age && (
                <Text style={styles.errorText}>{errors.age}</Text>
              )}
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
  buttonRegister: {
    borderRadius: 8,
    marginVertical: 6,
    marginHorizontal: 50,
  },
  buttonTextRegister: {
    color: "#fff",
  },
});

export default SignUpScreen;
