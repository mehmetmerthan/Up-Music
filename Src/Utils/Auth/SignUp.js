import { Auth } from "aws-amplify";
import UploadUser from "../Uploads/uploadUser";
async function signUp(props) {
  const {
    username,
    password,
    name,
    about,
    urlPP,
    location,
    tagStyle,
    tagRole,
    experiencesData,
    user_type,
  } = props;
  const res = await Auth.signUp({
    username,
    password,
    attributes: {
      email: username,
    },
    autoSignIn: {
      enabled: true,
    },
  });
  await UploadUser({
    id: res?.userSub,
    name: name,
    about: about,
    urlPP: urlPP,
    location: location,
    tagStyle: tagStyle,
    tagRole: tagRole,
    experiencesData: experiencesData,
    user_type: user_type,
    operationType: "create",
  });
}

export default signUp;
