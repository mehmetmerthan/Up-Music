import React from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import LocationPicker from "./Components/PickerComponents/LocationPicker";
const Ex = () => {
  function x() {
    console.log("");
  }
  return <LocationPicker />;
};

export default Ex;

const styles = StyleSheet.create({
  container: {
    padding: 100,
    // justifyContent: "center",
    // alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
  },
});
