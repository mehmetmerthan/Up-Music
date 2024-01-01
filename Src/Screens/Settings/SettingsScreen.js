import { View, DevSettings } from "react-native";
import { React, useState } from "react";
import { Button } from "@rneui/themed";
import { Auth } from "aws-amplify";
export default function SettingsScreen() {
  const [isLoading, setIsLoading] = useState(false);
  async function handleSignOut() {
    setIsLoading(true);
    try {
      await Auth.signOut();
      setTimeout(() => {
        DevSettings.reload();
      }, 2000);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <View>
      <Button title={"Sign Out"} onPress={handleSignOut} loading={isLoading} />
    </View>
  );
}
