/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      about
      user_type
      key_pp
      posts {
        nextToken
        __typename
      }
      price
      city
      country
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      about
      user_type
      key_pp
      posts {
        nextToken
        __typename
      }
      price
      city
      country
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      about
      user_type
      key_pp
      posts {
        nextToken
        __typename
      }
      price
      city
      country
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
        key_pp
        price
        city
        country
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
        key_pp
        price
        city
        country
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
        key_pp
        price
        city
        country
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
        key_pp
        price
        city
        country
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
        key_pp
        price
        city
        country
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      userMessagesSentId
      userMessagesReceivedId
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
        key_pp
        price
        city
        country
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
        key_pp
        price
        city
        country
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      userMessagesSentId
      userMessagesReceivedId
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
        key_pp
        price
        city
        country
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
        key_pp
        price
        city
        country
        tag_styles
        tag_roles
        createdAt
        updatedAt
        __typename
      }
      userMessagesSentId
      userMessagesReceivedId
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
