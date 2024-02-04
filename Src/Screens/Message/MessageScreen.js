import { React, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { ListItem, Button } from "@rneui/themed";
import styles from "../../Styles/Message/MessageStyle";
import { getUserId } from "../../Utils/getUser";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import { messagesByDate } from "../../Utils/Queries/messageQueries";
import { S3ImageAvatar } from "../../Components/S3Media";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";
export default function MessageScreen() {
  const [messages, setMessages] = useState([]);
  const [groupedMessages, setGroupedMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const scrollViewRef = useRef();
  useEffect(() => {
    let tempMessages = {};
    messages.forEach((message) => {
      const senderID = message.sender.id;
      const receiverID = message.receiver.id;
      if (
        (senderID === userId && message.hasSender) ||
        (receiverID === userId && message.hasReceiver)
      ) {
        if (!tempMessages[senderID]) {
          tempMessages[senderID] = {
            message: message,
            allMessages: [message],
            unreadCount: message.isRead === undefined ? 1 : 0,
          };
        } else {
          tempMessages[senderID].allMessages.push(message);
          if (message.isRead === undefined) {
            tempMessages[senderID].unreadCount += 1;
          }
        }
      }
    });
    setGroupedMessages(Object.values(tempMessages));
  }, [messages]);
  useEffect(() => {
    async function fetchMessages() {
      const res = await getUserId();
      setUserId(res);
      const variables = {
        type: "message",
        sortDirection: "DESC",
        filter: {
          or: [
            { userMessagesReceivedId: { eq: res } },
            { userMessagesSentId: { eq: res } },
          ],
        },
      };
      try {
        const result = await API.graphql(
          graphqlOperation(messagesByDate, variables)
        );
        const allMessages = result?.data?.messagesByDate?.items;
        setMessages(allMessages);
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
        //scrollViewRef.current.scrollToEnd({ animated: true });
      },
      error: (error) => console.log(error),
    });
    return () => subscription.unsubscribe();
  }, []);
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
    console.log("Keyboard dismissed");
  };
  const RenderMessage = ({ item }) => {
    return (
      <ListItem.Swipeable
        rightContent={(action) => (
          <Button
            containerStyle={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#f4f4f4",
            }}
            type="clear"
            icon={{ name: "delete-outline" }}
            onPress={action}
          />
        )}
        bottomDivider
        // Component={TouchableScale}
        // friction={90}
        // tension={100}
        // activeScale={0.95}
        // linearGradientProps={{
        //   colors: ["#4facfe", "#00f2fe"],
        //   start: { x: 1, y: 0 },
        //   end: { x: 0.2, y: 0 },
        // }}
        // ViewComponent={LinearGradient}
      >
        <S3ImageAvatar size={42} />
        <ListItem.Content>
          <ListItem.Title style={styles.username}>
            {item.message.sender.id === userId
              ? item.message.receiver.name
              : item.message.sender.name}
          </ListItem.Title>
          <ListItem.Subtitle>
            {item.message.sender.id === userId && "you:"} {item.message.content}{" "}
            {item.unreadCount > 0 && `(${item.unreadCount})`}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" />
      </ListItem.Swipeable>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <FlatList
          data={groupedMessages}
          renderItem={({ item }) => <RenderMessage item={item} />}
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
