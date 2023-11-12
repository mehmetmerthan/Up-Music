import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
      },
      base: {
        flexGrow: 1,
        padding: 24,
      },
      hStack: {
        overflow: "hidden",
      },
      hStackContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: -2.5,
        marginHorizontal: -2.5,
      },
      hStackItemWrap: {
        paddingVertical: 3.5,
        paddingHorizontal: 5.5,
        minWidth: 0,
        flexShrink: 0,
      },
      tag: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 34,
        maxWidth: 140,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 14,
        backgroundColor: "#169f94",
        overflow: "hidden",
      },
      tagText: {
        fontSize: 16,
        color: "#ffffff",
        flexShrink: 1,
      },
      tagIcon: {
        flexShrink: 0,
        width: 16,
        height: 16,
        marginLeft: 10,
        tintColor: "#ffffff",
      },
});

export default styles;