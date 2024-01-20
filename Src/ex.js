import React, { useEffect, useState } from "react";
import {
  FlatList,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { API } from "aws-amplify";
import { getUser } from "./Utils/Queries/userQueries";
export default function Ex() {
  async function get() {
    const user = await API.graphql({
      query: getUser,
      variables: { id: "9edc95e4-f7b2-4cd3-bbdd-dc14b6edc424" },
    });
    console.log(user?.data?.getUser?.experience.items);
  }
  useEffect(() => {
    get();
  }, []);
}
