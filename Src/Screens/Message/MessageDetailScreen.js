import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ActivityIndicator,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  getUserId,
  getUserAttributesForMessageSender,
} from "../../Utils/getUser";
import { React, useState, useRef, useEffect, useMemo } from "react";
import { Feather } from "@expo/vector-icons";
import { Input, Divider, Icon } from "@rneui/themed";
import styles from "../../Styles/Message/MessageDetailStyle";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/elements";
import { API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "../../graphql/subscriptions";
import * as mutations from "../../graphql/mutations";
import { messagesByDate } from "../../Utils/Queries/messageQueries";
import { S3ImageAvatar } from "../../Components/S3Media";
import Media from "../../Components/Media";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";

export default function MessageDetailScreen() {
  const { t } = useTranslation();
  const [text, onChangeText] = useState("");
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { senderId } = route?.params || "";
  const [receiverId, setReceiverId] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [senderAttributes, setSenderAttributes] = useState({});
  const scrollViewRef = useRef();
  const navigation = useNavigation();
  const [loadingMessages, setLoadingMessages] = useState(false);
  async function sendMessage() {
    try {
      setLoadingMessages(true);
      if (text === "" || loadingMessages) {
        return;
      }
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
    } finally {
      setLoadingMessages(false);
    }
  }
  async function fetchMessages() {
    setRefreshing(true);
    const res = await getUserId();
    setReceiverId(res);
    const variables = {
      type: "message",
      sortDirection: "ASC",
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
            hasMessagesSender: { eq: true },
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
    scrollViewRef.current.scrollToEnd({ animated: true });
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
  useEffect(() => {
    async function fetchUser() {
      const { userItem } = await getUserAttributesForMessageSender({
        senderId,
      });
      setSenderAttributes(userItem);
    }
    fetchUser();
  }, [senderId]);
  const HeaderBar = () => (
    <View
      style={{
        height: 56,
        backgroundColor: " rgb(255, 255, 255)",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={{ marginLeft: 15 }}
        />
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            color: "rgb(28, 28, 30)",
            marginHorizontal: 25,
            fontSize: 22,
          }}
        >
          {senderAttributes?.name || ""}
        </Text>
        <Pressable
          onPress={() =>
            navigation.navigate("UserDetailScreen", { userId: senderId })
          }
        >
          <S3ImageAvatar size={40} imageKey={senderAttributes?.key_pp} />
        </Pressable>
      </View>
    </View>
  );
  const MemoizedHeaderBar = useMemo(
    () => <HeaderBar senderAttributes={senderAttributes} />,
    [senderAttributes]
  );

  const height = useHeaderHeight();
  const handleInputFocus = () => {
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }, 300);
  };
  const rightIcon = (
    <Pressable onPress={sendMessage}>
      <Icon name="send" size={35} color="#2089dc" style={{ marginRight: 10 }} />
    </Pressable>
  );
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: " rgb(255, 255, 255)" }}
      edges={["right", "top", "left"]}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={height}
        enabled
      >
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <>
            <View style={{ top: 0, left: 0, right: 0 }}>
              {MemoizedHeaderBar}
            </View>
            <FlatList
              decelerationRate={0.8}
              data={messages}
              renderItem={renderMessage}
              keyExtractor={(item) => item.id}
              ref={scrollViewRef}
              onContentSizeChange={() =>
                scrollViewRef.current.scrollToEnd({ animated: true })
              }
              ListFooterComponent={
                refreshing &&
                !messages.length > 0 && (
                  <ActivityIndicator size={"large"} style={{ marginTop: 10 }} />
                )
              }
            />
          </>
        </TouchableWithoutFeedback>
        <Input
          clearButtonMode="always"
          inputContainerStyle={styles.input}
          onChangeText={onChangeText}
          placeholder={t("writeHere")}
          value={text}
          rightIcon={rightIcon}
          onFocus={handleInputFocus}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
