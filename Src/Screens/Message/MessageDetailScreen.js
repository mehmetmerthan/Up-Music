import { React, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Input, Divider, Icon } from "@rneui/themed";
import styles from "../../Styles/Message/MessageDetailStyle";
import { useRoute } from "@react-navigation/native";
import { getUserId } from "../../Utils/getUser";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import { messagesByDate } from "../../Utils/Queries/messageQueries";
import { S3ImageAvatar } from "../../Components/S3Media";
import Media from "../../Components/Media";
export default function MessageDetailScreen() {
  const [text, onChangeText] = useState("");
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { senderId } = route?.params || "";
  const [receiverId, setReceiverId] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const scrollViewRef = useRef();
  async function sendMessage() {
    try {
      await API.graphql(
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
    setRefreshing(true);
    const res = await getUserId();
    setReceiverId(res);
    const variables = {
      type: "message",
      sortDirection: "DESC",
      filter: {
        or: [
          {
            userMessagesSentId: { eq: senderId },
            userMessagesReceivedId: { eq: res },
            hasMessagesReceiver: { eq: true },
          },
          {
            userMessagesSentId: { eq: res },
            userMessagesReceivedId: { eq: senderId },
            hasMessagesReceiver: { eq: true },
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
      if (newMessages.length > 0) {
        newMessages.forEach(async (message) => {
          if (message?.receiver?.id === res && message?.isRead === false) {
            await API.graphql(
              graphqlOperation(mutations.updateMessage, {
                input: {
                  id: message.id,
                  isRead: true,
                },
              })
            );
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
    setRefreshing(false);
  }

  useEffect(() => {
    fetchMessages();
  }, [loading]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
    ).subscribe({
      next: (messageData) => {
        setLoading(true);
        const newMessage = messageData.value.data.onCreateMessage;
        if (newMessage && newMessage?.id) {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      },
      error: (error) => console.log(error),
    });
    setLoading(false);
    return () => subscription.unsubscribe();
  }, [messages, senderId, receiverId]);

  const handleInputFocus = () => {
    scrollViewRef.current.scrollToOffset({ offset: 0, animated: true });
  };
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
  };

  const renderMessage = ({ item, index }) => {
    const messageDate = new Date(item?.createdAt);
    const options = { hour: "numeric", minute: "numeric" };
    const formattedDate = messageDate.toLocaleString("us-US", options);
    return (
      <View
        style={[
          styles.messageContainer,
          { backgroundColor: index % 2 !== 0 ? "#00000006" : "#ffffff00" },
        ]}
      >
        {item?.sender?.id === receiverId ? (
          <View style={styles.messageReceiever}>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{item?.sender?.name}</Text>
              <S3ImageAvatar size={42} imageKey={item?.sender?.key_pp} />
            </View>
            <View style={styles.typeArea}>
              {item?.key_file && (
                <Media fileKey={item?.key_file} type={item?.mime_type} />
              )}
              <Text style={styles.message}>{item?.content}</Text>
              {item.createdAt && (
                <Text style={styles.createdAt}>{formattedDate}</Text>
              )}
            </View>
          </View>
        ) : (
          <View style={styles.messageSender}>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{item?.sender?.name}</Text>
              <S3ImageAvatar size={42} imageKey={item?.sender?.key_pp} />
            </View>
            <View style={styles.typeArea}>
              <Text style={styles.message}>{item?.content}</Text>

              {item?.createdAt && (
                <Text style={styles.createdAt}>{formattedDate}</Text>
              )}
            </View>
            {item?.key_file && (
              <Media fileKey={item?.key_file} type={item?.mime_type} />
            )}
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
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <FlatList
      decelerationRate={0.5}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToOffset({ offset: 0, animated: true })
          }
          inverted
          ListFooterComponent={
            refreshing &&
            !messages.length > 0 && (
              <ActivityIndicator size={"large"} style={{ marginTop: 10 }} />
            )
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
