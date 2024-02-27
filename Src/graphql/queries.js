/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        type
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        isRead
        hasMessagesSender
        hasMessagesReceiver
        userMessagesSentId
        userMessagesReceivedId
        key_file
        mime_type
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        type
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByDate = /* GraphQL */ `
  query MessagesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        isRead
        hasMessagesSender
        hasMessagesReceiver
        userMessagesSentId
        userMessagesReceivedId
        key_file
        mime_type
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
