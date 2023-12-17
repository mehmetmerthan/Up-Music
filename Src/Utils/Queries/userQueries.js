export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      about
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
      posts {
        nextToken
        __typename
        items {
          id
          type
          content
          price
          key_media
          createdAt
          updatedAt
          __typename
          tag {
            tag_all
            tag_roles
            tag_styles
          }
          comments {
            items {
              content
              owner {
                name
                key_pp
                id
              }
            }
          }
          likes {
            items {
              owner {
                id
                name
              }
            }
          }
          location {
            city
            content
            country
            place
          }
          musician_needed {
            items {
              id
              name
              key_pp
            }
          }
          participants {
            items {
              id
              key_pp
              name
            }
          }
        }
      }
      # createdAt
      # updatedAt
      # userFollowingsId
      # userFollowersId
      # postParticipantsId
      # postMusician_neededId
      # userLocationId
      # userTagId
      __typename
    }
  }
`;