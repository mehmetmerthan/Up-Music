import { React, useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { ListItem, Button } from "@rneui/themed";
import styles from "../../Styles/Message/MessageStyle";
import { getUserId } from "../../Utils/getUser";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import { messagesByDate } from "../../Utils/Queries/messageQueries";
import { S3ImageAvatar } from "../../Components/S3Media";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function MessageScreen() {
  const [messages, setMessages] = useState([]);
  const [groupedMessages, setGroupedMessages] = useState([]);
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onUpdateMessage)
    ).subscribe({
      next: () => {
        setLoading(true);
      },
      error: (error) => console.log(error),
    });
    setLoading(false);
    return () => subscription.unsubscribe();
  }, []);

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
  }, [userId, messages]);

  useEffect(() => {
    fetchMessages();
  }, [loading]);

  async function fetchMessages() {
    setRefreshing(true);
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
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    groupMessages();
  }, [messages]);
  function groupMessages() {
    let tempMessages = {};
    let allUnreadCount = 0;
    messages.forEach((message) => {
      let senderID = message.sender.id;
      const receiverID = message.receiver.id;
      const controlId = senderID;
      if (senderID === userId) {
        senderID = receiverID;
      }
      if (message.hasMessagesReceiver) {
        if (!tempMessages[senderID]) {
          tempMessages[senderID] = {
            message: message,
            allMessages: [message],
            unreadCount:
              controlId !== userId && message.isRead === false ? 1 : 0,
          };
        } else if (tempMessages[senderID]) {
          tempMessages[senderID].allMessages.push(message);
          if (message.isRead === false && controlId !== userId) {
            tempMessages[senderID].unreadCount += 1;
          }
        }
        if (controlId !== userId && message.isRead === false) {
          allUnreadCount += 1;
        }
      }
    });
    setGroupedMessages(Object.values(tempMessages));
  }

  const navigation = useNavigation();
  const RenderMessage = ({ item }) => {
    const date = new Date(item.message.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

    return (
      <ListItem.Swipeable
        onPress={() => {
          navigation.navigate("MessageDetailScreen", {
            senderId:
              userId === item.message.sender.id
                ? item.message.receiver.id
                : item.message.sender.id,
          });
        }}
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
        Component={TouchableScale}
        friction={90}
        tension={100}
        activeScale={0.95}
        linearGradientProps={
          item.unreadCount === 0
            ? {
                colors: ["#f4f4f4", "#f4f4f4"],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }
            : {
                colors: ["#4facfe", "#00f2fe"],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }
        }
        ViewComponent={LinearGradient}
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
        {item.message.createdAt && (
          <Text style={styles.createdAt}>{formattedDate}</Text>
        )}
        <ListItem.Chevron color="black" />
      </ListItem.Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedMessages}
        renderItem={({ item }) => <RenderMessage item={item} />}
        keyExtractor={(item) => item.message.id}
        ListFooterComponent={
          refreshing &&
          !groupedMessages.length > 0 && (
            <ActivityIndicator size={"large"} style={{ marginTop: 10 }} />
          )
        }
      />
    </View>
  );
}
