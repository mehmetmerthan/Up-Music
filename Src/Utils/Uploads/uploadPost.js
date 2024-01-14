import { API } from "aws-amplify";
import { getUserId } from "../getUser";
import uploadMedia from "./uploadMedia";
import * as mutations from "../../graphql/mutations";
async function UploadPost(props) {
  const {
    content = "",
    post_type = "",
    media = "",
    mediaType = "",
    location = "",
    tag_styles = [],
    tag_roles = [],
    participants = [],
    tag_roles_needed = [],
  } = props;
  const userID = await getUserId();
  const { mediaKey } = await uploadMedia({
    media: media,
  });
  const city = location?.city || "";
  const country = location?.country || "";
  const postDetails = {
    content: content,
    type: "post",
    post_type: post_type,
    city: city,
    country: country,
    key_media: mediaKey,
    media_type: mediaType,
    userPostsId: userID,
    tag_styles: tag_styles,
    tag_roles: tag_roles,
    participants: participants,
    tag_roles_needed: tag_roles_needed,
  };
  if (participants.length === 0) {
    delete postDetails.participants;
  }
  if (tag_roles_needed.length === 0) {
    delete postDetails.tag_roles_needed;
  }
  if (content === "") {
    delete postDetails.content;
  }
  if (mediaKey === "") {
    delete postDetails.key_media;
  }
  if (mediaType === "") {
    delete postDetails.media_type;
  }
  if (city === "") {
    delete postDetails.city;
  }
  if (country === "") {
    delete postDetails.country;
  }
  if (tag_styles.length === 0) {
    delete postDetails.tag_styles;
  }
  if (tag_roles.length === 0) {
    delete postDetails.tag_roles;
  }
  await API.graphql({
    query: mutations.createPost,
    variables: { input: postDetails },
  });
}

export default UploadPost;
