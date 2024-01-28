import { Auth } from "aws-amplify";

async function signUp(props) {
  const { username, password } = props;

  try {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email: username,
      },
      autoSignIn: {
        enabled: true,
      },
    });
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export default signUp;
