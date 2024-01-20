import { API, Auth } from "aws-amplify";
import { getUser } from "./Queries/userQueries";
async function getUserId() {
    const user = await Auth.currentAuthenticatedUser();
    const { attributes } = user;
    const userID = attributes.sub;
    return (userID)
}
async function getUserAttributes() {
    const userId = await getUserId();
    const item = await API.graphql({ query: getUser, variables: { id: userId } });
    const userItem = item?.data?.getUser;
    return { userItem }
}

export { getUserId, getUserAttributes }