import { useEffect } from "react";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
export default async function SignOut() {
  const navigation = useNavigation();
  useEffect(() => {
    // async function handleSignOut() {
    //   try {
    //     await Auth.signOut();
    //     navigation.navigate("AuthStack");
    //   } catch (error) {
    //     console.log("error signing out: ", error);
    //   }
    // }
    // handleSignOut();
  }, []);
  return null;
}
