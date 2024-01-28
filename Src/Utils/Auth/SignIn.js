import { Auth } from "aws-amplify";

async function signIn(props) {
  const { email, password } = props;
  try {
    await Auth.signIn(email, password);
    return { error: null };
  } catch (error) {
    console.log("error signing in", error);
    return { error };
  }
}

export default signIn;
