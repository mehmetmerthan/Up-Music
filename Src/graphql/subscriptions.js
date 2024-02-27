/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      about
      user_type
      Instrumentalist
      key_pp
      posts {
        nextToken
        __typename
      }
      price
      city
      country
      place
      tag_styles
      tag_roles
      experiences {
        about
        tag_styles
        tag_roles
        song_name
        song_artist
        song_link
        __typename
      }
      messagesSent {
        nextToken
        __typename
      }
      messagesReceived {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      about
      user_type
      Instrumentalist
      key_pp
      posts {
        nextToken
        __typename
      }
      price
      city
      country
      place
      tag_styles
      tag_roles
      experiences {
        about
        tag_styles
        tag_roles
        song_name
        song_artist
        song_link
        __typename
      }
      messagesSent {
        nextToken
        __typename
      }
      messagesReceived {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      about
      user_type
      Instrumentalist
      key_pp
      posts {
        nextToken
        __typename
      }
      price
      city
      country
      place
      tag_styles
      tag_roles
      experiences {
        about
        tag_styles
        tag_roles
        song_name
        song_artist
        song_link
        __typename
      }
      messagesSent {
        nextToken
        __typename
      }
      messagesReceived {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      post_type
      content
      price
      key_media
      media_type
      city
      country
      place
      tag_styles
      tag_roles
      tag_roles_needed
      owner {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      post_type
      content
      price
      key_media
      media_type
      city
      country
      place
      tag_styles
      tag_roles
      tag_roles_needed
      owner {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      post_type
      content
      price
      key_media
      media_type
      city
      country
      place
      tag_styles
      tag_roles
      tag_roles_needed
      owner {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      type
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      content
      isRead
      hasMessagesSender
      hasMessagesReceiver
      sender {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      receiver {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      userMessagesSentId
      userMessagesReceivedId
      key_file
      mime_type
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      content
      isRead
      hasMessagesSender
      hasMessagesReceiver
      sender {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      receiver {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      userMessagesSentId
      userMessagesReceivedId
      key_file
      mime_type
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      content
      isRead
      hasMessagesSender
      hasMessagesReceiver
      sender {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      receiver {
        id
        name
        about
        user_type
        Instrumentalist
        key_pp
        price
        city
        country
        place
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      userMessagesSentId
      userMessagesReceivedId
      key_file
      mime_type
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
