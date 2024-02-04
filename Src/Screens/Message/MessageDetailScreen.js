import { React, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { Input, Divider, Button } from "@rneui/themed";
import styles from "../../Styles/Message/MessageDetailStyle";
import { useRoute } from "@react-navigation/native";
import { getUserId } from "../../Utils/getUser";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
export default function MessageDetailScreen() {
  const [text, onChangeText] = useState("");
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { senderId } = route?.params || "";
  const [receiverId, setReceiverId] = useState("");
  const scrollViewRef = useRef();
  async function getreceiverID() {
    const res = await getUserId();
    setReceiverId(res);
  }
  async function sendMessage() {
    try {
      const result = await API.graphql(
        graphqlOperation(mutations.createMessage, {
          input: {
            userMessagesSentId: senderId,
            userMessagesReceivedId: receiverId,
            content: text,
            type: "message",
          },
        })
      );
      onChangeText("");
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchMessages() {
    const variables = {
      filter: {
        or: [
          {
            and: [
              { userMessagesSentId: { eq: senderId } },
              { userMessagesReceivedId: { eq: receiverId } },
            ],
          },
          {
            and: [
              { userMessagesSentId: { eq: receiverId } },
              { userMessagesReceivedId: { eq: senderId } },
            ],
          },
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
  useEffect(() => {
    getreceiverID();
    fetchMessages();

    const variables = {
      filter: {
        userMessagesSentId: { eq: senderId },
        userMessagesReceivedId: { eq: receiverId },
      },
    };
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: ({ value }) => {
        console.log("value", { value });
        const newMessage = value.data.onCreateMessage;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        scrollViewRef.current.scrollToEnd({ animated: true });
      },
      error: (error) => console.log(error),
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleInputFocus = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
    console.log("Keyboard dismissed");
  };

  const renderMessage = ({ item }) => {
    return (
      <View>
        <Text style={styles.message}>{item.content}</Text>
        <Divider />
      </View>
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
      <Input
        clearButtonMode="always"
        inputContainerStyle={styles.input}
        onChangeText={onChangeText}
        placeholder="Write here..."
        value={text}
        rightIcon={{ type: "font-awesome", name: "send" }}
        onFocus={handleInputFocus}
      />
      <Button title={"Send"} onPress={sendMessage} />
    </View>
  );
}
