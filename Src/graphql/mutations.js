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
      posts {
        items {
          id
          type
          content
          price
          key_media
          createdAt
          updatedAt
          userPostsId
          postLocationId
          postTagId
          __typename
        }
        nextToken
        __typename
      }
      key_pp
      key_back
      location {
        id
        content
        city
        country
        place
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        __typename
      }
      followings {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      followers {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      comments {
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
      likes {
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
      createdAt
      updatedAt
      userFollowingsId
      userFollowersId
      postParticipantsId
      postMusician_neededId
      userLocationId
      userTagId
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
      posts {
        items {
          id
          type
          content
          price
          key_media
          createdAt
          updatedAt
          userPostsId
          postLocationId
          postTagId
          __typename
        }
        nextToken
        __typename
      }
      key_pp
      key_back
      location {
        id
        content
        city
        country
        place
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        __typename
      }
      followings {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      followers {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      comments {
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
      likes {
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
      createdAt
      updatedAt
      userFollowingsId
      userFollowersId
      postParticipantsId
      postMusician_neededId
      userLocationId
      userTagId
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
      posts {
        items {
          id
          type
          content
          price
          key_media
          createdAt
          updatedAt
          userPostsId
          postLocationId
          postTagId
          __typename
        }
        nextToken
        __typename
      }
      key_pp
      key_back
      location {
        id
        content
        city
        country
        place
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        __typename
      }
      followings {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      followers {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      comments {
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
      likes {
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
      createdAt
      updatedAt
      userFollowingsId
      userFollowersId
      postParticipantsId
      postMusician_neededId
      userLocationId
      userTagId
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
      type
      content
      price
      key_media
      location {
        id
        content
        city
        country
        place
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        __typename
      }
      participants {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      musician_needed {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
        __typename
      }
      likes {
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
      comments {
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
      createdAt
      updatedAt
      userPostsId
      postLocationId
      postTagId
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
      type
      content
      price
      key_media
      location {
        id
        content
        city
        country
        place
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        __typename
      }
      participants {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      musician_needed {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
        __typename
      }
      likes {
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
      comments {
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
      createdAt
      updatedAt
      userPostsId
      postLocationId
      postTagId
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
      type
      content
      price
      key_media
      location {
        id
        content
        city
        country
        place
        createdAt
        updatedAt
        __typename
      }
      tag {
        id
        tag_styles
        tag_roles
        tag_all
        createdAt
        updatedAt
        __typename
      }
      participants {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      musician_needed {
        items {
          id
          name
          about
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
          __typename
        }
        nextToken
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
        __typename
      }
      likes {
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
      comments {
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
      createdAt
      updatedAt
      userPostsId
      postLocationId
      postTagId
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
        type
        content
        price
        key_media
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
          __typename
        }
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
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
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
        postLocationId
        postTagId
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
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
        type
        content
        price
        key_media
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
          __typename
        }
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
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
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
        postLocationId
        postTagId
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
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
        type
        content
        price
        key_media
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
          __typename
        }
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
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
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
        postLocationId
        postTagId
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
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
        type
        content
        price
        key_media
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
          __typename
        }
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
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
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
        postLocationId
        postTagId
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
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
        type
        content
        price
        key_media
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
          __typename
        }
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
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
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
        postLocationId
        postTagId
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
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
        type
        content
        price
        key_media
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
          __typename
        }
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
          key_pp
          key_back
          createdAt
          updatedAt
          userFollowingsId
          userFollowersId
          postParticipantsId
          postMusician_neededId
          userLocationId
          userTagId
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
        postLocationId
        postTagId
        __typename
      }
      owner {
        id
        name
        about
        posts {
          nextToken
          __typename
        }
        key_pp
        key_back
        location {
          id
          content
          city
          country
          place
          createdAt
          updatedAt
          __typename
        }
        tag {
          id
          tag_styles
          tag_roles
          tag_all
          createdAt
          updatedAt
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
        userLocationId
        userTagId
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
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      tag_styles
      tag_roles
      tag_all
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      tag_styles
      tag_roles
      tag_all
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      tag_styles
      tag_roles
      tag_all
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      content
      city
      country
      place
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      content
      city
      country
      place
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      content
      city
      country
      place
      createdAt
      updatedAt
      __typename
    }
  }
`;
