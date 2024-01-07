import { API } from "aws-amplify";
import { getUserId } from "../getUser";
import uploadMedia from "./uploadMedia";
import * as mutations from "../../graphql/mutations";
async function UploadPost(props) {
  const {
    content = "",
    type = "",
    media = "",
    location = "",
    tag_styles = [],
    tag_roles = [],
    participants = [],
    musician_needed = [],
  } = props;
  const { userID } = await getUserId();
  const { mediaKey } = await uploadMedia({ media: media });
  const city = location?.city || "";
  const country = location?.country || "";
  const postDetails = {
    content: content,
    type: type,
    city: city,
    country: country,
    key_media: mediaKey,
    userPostId: userID,
    tag_styles: tag_styles,
    tag_roles: tag_roles,
    participants: participants,
    musician_needed: musician_needed,
  };
  if (participants.length === 0) {
    delete postDetails.participants;
  }
  if (musician_needed.length === 0) {
    delete postDetails.musician_needed;
  }
  if (content === "") {
    delete postDetails.content;
  }
  if (type === "") {
    delete postDetails.type;
  }
  if (mediaKey === "") {
    delete postDetails.key_media;
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
