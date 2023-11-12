import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab/BottomTab";

export default function Router() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
