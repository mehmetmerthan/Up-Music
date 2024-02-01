import { React, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { ListItem } from "@rneui/themed";
import styles from "../../Styles/MessageDetailStyle";
import { getUserId } from "../../Utils/getUser";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import * as queries from "../../graphql/queries";
import { S3ImageAvatar } from "../../Components/S3Media";
export default function MessageScreen() {
  const [messages, setMessages] = useState([]);
  const [receiverId, setReceiverId] = useState("");
  const scrollViewRef = useRef();

  useEffect(() => {
    async function fetchMessages() {
      const res = await getUserId();
      setReceiverId(res);
      const variables = {
        filter: {
          or: [
            { userMessagesReceivedId: { eq: res } },
            { userMessagesSentId: { eq: res } },
          ],
        },
      };
      try {
        const result = await API.graphql(
          graphqlOperation(queries.listMessages, variables)
        );
        const newMessages = result?.data?.listMessages?.items;
        setMessages(newMessages);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMessages();
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: ({ value }) => {
        const newMessage = value.data.onCreateMessage;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        scrollViewRef.current.scrollToEnd({ animated: true });
      },
      error: (error) => console.log(error),
    });
    return () => subscription.unsubscribe();
  }, []);
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
    console.log("Keyboard dismissed");
  };
  const renderMessage = ({ item }) => {
    return (
      <>
        <ListItem bottomDivider>
          <S3ImageAvatar imageKey={item.key_pp} size="small" />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
