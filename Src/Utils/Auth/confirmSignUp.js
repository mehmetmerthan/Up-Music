import { Auth } from "aws-amplify";
async function confirmSignUp(props) {
  const { code, username } = props;
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}

async function resendSignUp(props) {
  const { username } = props;
  try {
    await Auth.resendSignUp(username);
  } catch (error) {
    console.log("error resending code", error);
  }
}

export { confirmSignUp, resendSignUp };
