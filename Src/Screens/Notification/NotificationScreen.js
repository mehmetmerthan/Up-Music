import { ScrollView,TouchableHighlight } from 'react-native'
import React from 'react'
import { ListItem, Avatar, Icon } from '@rneui/themed';
export default function NotificationScreen() {
  const data = [
    {
      name: "John Doe",
      message: "Liked your post !",
      profilPhoto: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      name: "John smith",
      message: "Invited you to a group !",
      profilPhoto: "https://randomuser.me/api/portraits/women/74.jpg",
      Invite: true
    },
    {
      name: "Amanda Doe",
      message: "Invited you to a event !",
      profilPhoto: "https://randomuser.me/api/portraits/men/73.jpg",
      Invite: true
    },
    {
      name: "Matt williams",
      message: "Comment your post !",
      profilPhoto: "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
      name: "robert carlos",
      message: "Invite a stage !",
      profilPhoto: "https://randomuser.me/api/portraits/men/71.jpg",
      Invite: true
    },
  ]

  return (
    <ScrollView>
      {data?.map((item, index) => (
        <ListItem bottomDivider Component={TouchableHighlight} onLongPress={()=>console.log("pressed long")} key={index}>
          <Avatar
            rounded
            source={{ uri: item.profilPhoto }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.message}</ListItem.Subtitle>
          </ListItem.Content>
          {item.Invite &&
            <ListItem.Content right>
              <Icon
                raised
                name='check'
                type='AntDesign'
                size={20}
                onPress={() => console.log('hello')} />
              <Icon
                raised
                name='cancel'
                type='MaterialCommunityIcons'
                size={20}
                onPress={() => console.log('hello')} />
            </ListItem.Content>
          }
        </ListItem>
      ))}
    </ScrollView>
  )
}