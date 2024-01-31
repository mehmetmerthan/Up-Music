import { View, ScrollView, TouchableHighlight } from "react-native";
import React from "react";
import { ListItem, Avatar, Badge } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
export default function MessageScreen() {
  const navigation = useNavigation();
  function navigateToMessageDetail() {
    navigation.navigate("MessageDetailScreen");
  }
  return (
    <ScrollView>
      <ListItem
        bottomDivider
        Component={TouchableHighlight}
        onPress={navigateToMessageDetail}
      >
        <View>
          <Avatar
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            size="medium"
          />
          <Badge
            status="primary"
            value={1}
            containerStyle={{ position: "absolute", top: 1, left: 40 }}
          />
        </View>
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="black" />
      </ListItem>
    </ScrollView>
  );
}
