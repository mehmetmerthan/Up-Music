import { React } from "react";
import { View, Text } from "react-native";
import { ListItem, Avatar, Icon } from '@rneui/themed';
const Comment = ({commentData}) => {
  const data = [
    {
      name: "John Doe",
      Comment: "Liked your post !",
      profilPhoto: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    {
      name: "John smith",
      Comment: "Nice !",
      profilPhoto: "https://randomuser.me/api/portraits/women/74.jpg",
    },
    {
      name: "Amanda Doe",
      Comment: "Good work !",
      profilPhoto: "https://randomuser.me/api/portraits/men/73.jpg",
    },
    {
      name: "Matt williams",
      Comment: "Instresting !",
      profilPhoto: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      name: "robert carlos",
      Comment: "Post more !",
      profilPhoto: "https://randomuser.me/api/portraits/men/71.jpg",
    }
  ]
  return (
    <View >
      {commentData.map((item, index) => (
        <ListItem bottomDivider onLongPress={() => console.log("pressed long")} key={index} containerStyle={{backgroundColor:"#cccccc00"}} >
          <Avatar
            rounded
            source={{ uri: "item.profilPhoto" }}
            size={26}
          />
          <ListItem.Content>
            <ListItem.Title >{item.owner.name}</ListItem.Title>
            <ListItem.Subtitle>{item.content}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default Comment;
