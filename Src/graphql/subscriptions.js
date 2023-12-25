/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      about
      gender
      age
      posts {
        nextToken
        __typename
      }
      key_pp
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      about
      gender
      age
      posts {
        nextToken
        __typename
      }
      key_pp
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      about
      gender
      age
      posts {
        nextToken
        __typename
      }
      key_pp
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
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
        gender
        age
        key_pp
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
      postOwnerId
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
        gender
        age
        key_pp
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
      postOwnerId
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
        gender
        age
        key_pp
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
      postOwnerId
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      content
      post {
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
        postOwnerId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
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
      commentPostId
      commentOwnerId
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      content
      post {
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
        postOwnerId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
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
      commentPostId
      commentOwnerId
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      content
      post {
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
        postOwnerId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
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
      commentPostId
      commentOwnerId
      __typename
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
      id
      post {
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
        postOwnerId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
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
      likePostId
      likeOwnerId
      __typename
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
      id
      post {
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
        postOwnerId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
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
      likePostId
      likeOwnerId
      __typename
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
      id
      post {
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
        postOwnerId
        __typename
      }
      owner {
        id
        name
        about
        gender
        age
        key_pp
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
      likePostId
      likeOwnerId
      __typename
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($filter: ModelSubscriptionTagFilterInput) {
    onCreateTag(filter: $filter) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($filter: ModelSubscriptionTagFilterInput) {
    onUpdateTag(filter: $filter) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($filter: ModelSubscriptionTagFilterInput) {
    onDeleteTag(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
