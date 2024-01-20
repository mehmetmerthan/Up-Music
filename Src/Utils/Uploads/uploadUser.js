import { API } from "aws-amplify";
import uploadMedia from "./uploadMedia";
import * as mutations from "../../graphql/mutations";
import { getUserId } from "../getUser";
async function UploadUser(props) {
  const {
    name = "",
    about = "",
    urlPP = "",
    location = "",
    tagStyle = [],
    tagRole = [],
    userData = "",
    operationType = "",
    experiencesData = [],
  } = props;
  const { mediaKey: key_pp } = await uploadMedia({
    media: urlPP,
    oldKey: userData?.key_pp || "",
  });
  const userId = await getUserId();
  
  const city = location?.city || "";
  const country = location?.country || "";

  const userDetails = {
    id: userId,
    name: name,
    about: about,
    key_pp: key_pp,
    location: {
      city: city,
      country: country,
    },
    tag: {
      tag_styles: tagStyle,
      tag_roles: tagRole,
    },
    experiences: experiencesData,
  };
  if (userDetails.name === "") {
    delete userDetails.name;
  }
  if (userDetails.age === "") {
    delete userDetails.age;
  }
  if (userDetails.gender === "") {
    delete userDetails.gender;
  }
  if (userDetails.about === "") {
    delete userDetails.about;
  }
  if (userDetails.key_pp === "") {
    delete userDetails.key_pp;
  }
  if (userDetails.location.city === "" && userDetails.location.country === "") {
    delete userDetails.location;
  }
  if (
    userDetails.tag.tag_styles.length === 0 &&
    userDetails.tag.tag_roles.length === 0
  ) {
    delete userDetails.tag;
  }
  if (userDetails.experiences.length === 0) {
    delete userDetails.experiences;
  }
  if (operationType === "create") {
    try {
      await API.graphql({
        query: mutations.createUser,
        variables: { input: userDetails },
      });
    } catch (error) {
      console.log(error);
    }
  } else if (operationType === "update") {
    try {
      await API.graphql({
        query: mutations.updateUser,
        variables: { input: userDetails },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default UploadUser;
