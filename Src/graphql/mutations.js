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
      tag_styles
      tag_roles
      tag_roles_needed
      tag_all
      participants {
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
      tag_styles
      tag_roles
      tag_roles_needed
      tag_all
      participants {
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
      tag_styles
      tag_roles
      tag_roles_needed
      tag_all
      participants {
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
      type
      createdAt
      updatedAt
      userPostsId
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        post_type
        content
        price
        key_media
        media_type
        city
        country
        tag_styles
        tag_roles
        tag_roles_needed
        tag_all
        type
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        post_type
        content
        price
        key_media
        media_type
        city
        country
        tag_styles
        tag_roles
        tag_roles_needed
        tag_all
        type
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      post {
        id
        post_type
        content
        price
        key_media
        media_type
        city
        country
        tag_styles
        tag_roles
        tag_roles_needed
        tag_all
        type
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      post {
        id
        post_type
        content
        price
        key_media
        media_type
        city
        country
        tag_styles
        tag_roles
        tag_roles_needed
        tag_all
        type
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      post {
        id
        post_type
        content
        price
        key_media
        media_type
        city
        country
        tag_styles
        tag_roles
        tag_roles_needed
        tag_all
        type
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      post {
        id
        post_type
        content
        price
        key_media
        media_type
        city
        country
        tag_styles
        tag_roles
        tag_roles_needed
        tag_all
        type
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
