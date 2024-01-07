/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      about
      gender
      age
      key_pp
      key_back
      city
      country
      tag_styles
      tag_roles
      tag_all
      posts {
        nextToken
        __typename
      }
      followings {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userFollowingsId
      userFollowersId
      postParticipantsId
      postMusician_neededId
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
        gender
        age
        key_pp
        key_back
        city
        country
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        userFollowingsId
        userFollowersId
        postParticipantsId
        postMusician_neededId
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
      type
      content
      price
      key_media
      city
      country
      tag_styles
      tag_roles
      tag_all
      participants {
        nextToken
        __typename
      }
      musician_needed {
        nextToken
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
        key_back
        city
        country
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        userFollowingsId
        userFollowersId
        postParticipantsId
        postMusician_neededId
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
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
        type
        content
        price
        key_media
        city
        country
        tag_styles
        tag_roles
        tag_all
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
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      post {
        id
        type
        content
        price
        key_media
        city
        country
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
        key_back
        city
        country
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        userFollowingsId
        userFollowersId
        postParticipantsId
        postMusician_neededId
        __typename
      }
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      post {
        id
        type
        content
        price
        key_media
        city
        country
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        userPostsId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
        key_back
        city
        country
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        userFollowingsId
        userFollowersId
        postParticipantsId
        postMusician_neededId
        __typename
      }
      createdAt
      updatedAt
      userLikesId
      postLikesId
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        userLikesId
        postLikesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
