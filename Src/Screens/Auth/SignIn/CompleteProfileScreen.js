import { React, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import UploadUser from "../../../Utils/Uploads/uploadUser";
const validationSchema = yup.object().shape({
  fistname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
});
const CompleteProfileScreen = ({ setCompleteProfile, setRedirect }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const handleRegistration = async (values) => {
    setLoading(true);
    try {
      await UploadUser({
        name: values.fistname + " " + values.lastname,
        operationType: "create",
      });
      setCompleteProfile(false);
      setRedirect(true);
    } catch (error) {
      console.log(error);
      setError(error);
      console.log("error signing up:", error);
      setLoading(false);
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
      <Text style={styles.headerText}>Complete Profile</Text>
      <Formik
        initialValues={{
          fistname: "",
          lastname: "",
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
            </View>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
            <Button
              loading={loading}
              onPress={handleSubmit}
              buttonStyle={styles.buttonRegister}
              title={"Complete"}
              titleStyle={styles.buttonTextRegister}
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

export default CompleteProfileScreen;
