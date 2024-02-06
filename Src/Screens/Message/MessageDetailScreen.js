import { React, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Input, Divider, Button, Icon } from "@rneui/themed";
import styles from "../../Styles/Message/MessageDetailStyle";
import { useRoute } from "@react-navigation/native";
import { getUserId } from "../../Utils/getUser";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import { messagesByDate } from "../../Utils/Queries/messageQueries";
import { S3ImageAvatar } from "../../Components/S3Media";

export default function MessageDetailScreen() {
  const [text, onChangeText] = useState("");
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { senderId } = route?.params || "";
  const [receiverId, setReceiverId] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  async function sendMessage() {
    try {
      const result = await API.graphql(
        graphqlOperation(mutations.createMessage, {
          input: {
            hasMessagesSender: true,
            hasMessagesReceiver: true,
            isRead: false,
            userMessagesSentId: receiverId,
            userMessagesReceivedId: senderId,
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
    setLoading(true);
    const res = await getUserId();
    setReceiverId(res);
    const variables = {
      type: "message",
      filter: {
        or: [
          {
            userMessagesSentId: { eq: senderId },
            userMessagesReceivedId: { eq: res },
          },
          {
            userMessagesSentId: { eq: res },
            userMessagesReceivedId: { eq: senderId },
          },
        ],
      },
    };

    try {
      const result = await API.graphql(
        graphqlOperation(messagesByDate, variables)
      );
      const newMessages = result?.data?.messagesByDate?.items;
      setMessages(newMessages);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchMessages();
    const variables = {
      filter: {
        or: [
          {
            userMessagesReceivedId: { eq: receiverId },
            userMessagesSentId: { eq: senderId },
          },
          {
            userMessagesReceivedId: { eq: senderId },
            userMessagesSentId: { eq: receiverId },
          },
        ],
      },
    };
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

  const handleInputFocus = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
    console.log("Keyboard dismissed");
  };

  const renderMessage = ({ item, index }) => {
    const messageDate = new Date(item.createdAt);
    const options = { hour: "numeric", minute: "numeric" };
    const formattedDate = messageDate.toLocaleString("us-US", options);
    return (
      <View
        style={[
          styles.messageContainer,
          { backgroundColor: index % 2 !== 0 ? "#00000006" : "#ffffff00" },
        ]}
      >
        {item.sender.id === receiverId ? (
          <View style={styles.messageReceiever}>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{item.sender.name}</Text>
              <S3ImageAvatar size={42} />
            </View>
            <View style={styles.typeArea}>
              <Text style={styles.message}>{item.content}</Text>
              {item.createdAt && (
                <Text style={styles.createdAt}>{formattedDate}</Text>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.messageSender}>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{item.sender.name}</Text>
              <S3ImageAvatar size={42} />
            </View>
            <View style={styles.typeArea}>
              <Text style={styles.message}>{item.content}</Text>
              {item.createdAt && (
                <Text style={styles.createdAt}>{formattedDate}</Text>
              )}
            </View>
          </View>
        )}
        <Divider />
      </View>
    );
  };
  function rightIcon() {
    return <Icon type="font-awesome" name="send" onPress={sendMessage} />;
  }
  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size={"large"} style={{ marginTop: 20 }} />
      )}
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
        rightIcon={rightIcon}
        onFocus={handleInputFocus}
      />
    </View>
  );
}
