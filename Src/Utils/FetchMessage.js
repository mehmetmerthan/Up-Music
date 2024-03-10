import { messagesByDate } from "./Queries/messageQueries";
import { listMessages } from "../graphql/queries";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as Notifications from "expo-notifications";
import { useNavigationContainerRef } from "@react-navigation/native";
export async function fetchUnreadMessages({ setUnreadCount }) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.attributes.sub;
    const variables = {
      filter: {
        userMessagesReceivedId: { eq: userId },
        hasMessagesReceiver: { eq: true },
        isRead: { eq: false },
      },
    };
    const result = await API.graphql(graphqlOperation(listMessages, variables));
    const unreadMessages = result?.data?.listMessages?.items;
    if (unreadMessages.length === 0) {
      setUnreadCount(null);
    } else {
      setUnreadCount(unreadMessages.length);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchLastMessage() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
      priority: "high",
    }),
  });
  const user = await Auth.currentAuthenticatedUser();
  const userId = user.attributes.sub;
  try {
    const variables = {
      limit: 1,
      type: "message",
      sortDirection: "DESC",
      filter: {
        userMessagesReceivedId: { eq: userId },
        hasMessagesReceiver: { eq: true },
        isRead: { eq: false },
      },
    };
    const result = await API.graphql(
      graphqlOperation(messagesByDate, variables)
    );
    const message = result?.data?.messagesByDate?.items;
    if (message && message.length > 0) {
      const lastMessage = message[0];
      await Notifications.scheduleNotificationAsync({
        content: {
          title: lastMessage.sender.name,
          body: lastMessage.content,
          data: { senderId: lastMessage.sender.id },
        },
        trigger: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
