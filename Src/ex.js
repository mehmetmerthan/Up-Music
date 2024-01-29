import { React, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "@rneui/themed";
const Ex = () => {
  const filter = {
    or: [
      { post_type: { eq: "musician_post" } },
      { city: { eq: "London" } },
      { country: { eq: "United Kingdom" } },
      { tag_styles: { contains: "Rock" } },
      { tag_roles: { contains: "Singer" } },
      { tag_roles: { contains: "Singer" } },
    ],
  };
  useEffect(() => {
    console.log("filter", filter);
    filter.or = filter.or.filter(item => !('post_type' in item));
    console.log("new filter", filter);
  }, []);
};
const styles = StyleSheet.create({});

export default Ex;
