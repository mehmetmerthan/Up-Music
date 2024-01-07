export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      about
      key_pp
      gender
      age
      city
      country
      tag_styles
      tag_roles
      tag_all
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
          city
          country
          tag_all
          tag_roles
          tag_styles
          createdAt
          updatedAt
          __typename
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
      __typename
    }
  }
`;
