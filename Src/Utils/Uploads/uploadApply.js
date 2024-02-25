import { API, Storage } from "aws-amplify";
import * as mutations from "../../graphql/mutations";
export default async function uploadApply(props) {
  const { userId, companyId, message, file, fileName, mimeType } = props;
  try {
    if (file) {
      const response = await fetch(file);
      const blob = await response.blob();
      const key = `${Date.now() + fileName}`;
      await Storage.put(key, blob);
      const messageDetails = {
        hasMessagesSender: true,
        hasMessagesReceiver: true,
        isRead: false,
        userMessagesSentId: userId,
        userMessagesReceivedId: companyId,
        content: message,
        key_file: key,
        mime_type: mimeType,
        type: "message",
      };
      await API.graphql({
        query: mutations.createMessage,
        variables: { input: messageDetails },
      });
    } else {
      const messageDetails = {
        hasMessagesSender: true,
        hasMessagesReceiver: true,
        isRead: false,
        userMessagesSentId: userId,
        userMessagesReceivedId: companyId,
        content: message,
        type: "message",
      };
      await API.graphql({
        query: mutations.createMessage,
        variables: { input: messageDetails },
      });
    }
  } catch (err) {
    console.log("Error uploading file:", err);
    return { mediaKey: "" };
  }
}
