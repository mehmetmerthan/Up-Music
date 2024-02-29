import { API, Auth } from "aws-amplify";
import { getUser, getUserForMessageSender } from "./Queries/userQueries";
async function getUserId() {
  const user = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  });
  const { attributes } = user;
  const userID = attributes.sub;
  return userID;
}
async function getUserAttributes() {
  const userId = await getUserId();
  const item = await API.graphql({ query: getUser, variables: { id: userId } });
  const userItem = item?.data?.getUser;
  return { userItem };
}

async function getUserAttributesForMessageSender({ senderId }) {
  const item = await API.graphql({
    query: getUserForMessageSender,
    variables: { id: senderId },
  });
  const userItem = item?.data?.getUser;
  return { userItem };
}
export { getUserId, getUserAttributes, getUserAttributesForMessageSender };
