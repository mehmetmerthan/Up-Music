import { API } from "aws-amplify";
import updateLocation from "./updateLocation";
import updateTag from "./updateTag";
import updateMedia from "./updateMedia";
import * as mutations from "../../graphql/mutations";
import { getUserId } from "../getUser";
async function UpdateUser(props) {
  const {
    name = "",
    about = "",
    urlPP = "",
    location = "",
    gender = "",
    age = "",
    tagStyle = [],
    tagRole = [],
    mediaType = "",
    userData = {},
  } = props;
  const { mediaKey: key_pp } = await updateMedia({
    media: urlPP,
    mediaType: mediaType,
    oldKey: userData?.key_pp,
  });

  const { locationId } = await updateLocation({
    location: location,
    oldLocationId: userData?.userLocationId,
  });
  const { tagId } = await updateTag({
    tag_styles: tagStyle,
    tag_roles: tagRole,
    oldTagId: userData?.userTagId,
  });

  const userId = await getUserId();
  const userDetails = {
    id: userId,
    name: name,
    age: age,
    gender: gender,
    about: about,
    key_pp: key_pp,
    userTagId: tagId,
    userLocationId: locationId,
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
  if (userDetails.userTagId === "") {
    delete userDetails.userTagId;
  }
  if (userDetails.userLocationId === "") {
    delete userDetails.userLocationId;
  }
  console.log(userDetails);
  // try {
  //   await API.graphql({
  //     query: mutations.updateUser,
  //     variables: { input: userDetails },
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
}

export default UpdateUser;
