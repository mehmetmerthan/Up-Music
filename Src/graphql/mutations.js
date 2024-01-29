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
