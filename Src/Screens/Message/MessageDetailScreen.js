import React, { useState, useRef } from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from "react-native";
import { Input, Avatar, Divider } from '@rneui/themed';
import styles from "../../Styles/MessageDetailStyle";
import messages from "../../../data/messages";
import { useNavigation } from "@react-navigation/native";
export default function MessageDetailScreen() {
  const [text, onChangeText] = useState("");
  const scrollViewRef = useRef();
  const navigation = useNavigation();
  const handleInputFocus = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };
  const handleKeyboardDismiss = () => {
    Keyboard.dismiss();
    console.log("Keyboard dismissed");
  }
  function navigateToUserDetailScreen() {
    navigation.navigate("UserDetailScreen");
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}

        >
          {
            messages.map((message, index) => (
              <View key={index} style={index % 2 === 0 ? styles.messageContainerFirst : styles.messageContainerSecond}>
                <TouchableOpacity style={styles.avatarContainer} onPress={navigateToUserDetailScreen}>
                  <Text style={styles.username}>{message.name}</Text>
                  <Avatar
                    rounded
                    source={{
                      uri: message.profilUrl,
                    }}
                    size="small"
                    containerStyle={styles.avatar}
                  />

                </TouchableOpacity>
                <Text style={styles.message}>{message.message}</Text>
                <Divider />
              </View>
            ))
          }
        </ScrollView>
      </TouchableWithoutFeedback>
      <Input
        clearButtonMode="always"
        inputContainerStyle={styles.input}
        onChangeText={onChangeText}
        placeholder="Write here..."
        value={text}
        rightIcon={{ type: 'font-awesome', name: 'send' }}
        onFocus={handleInputFocus}
        on
      />
    </View>

  );
}
