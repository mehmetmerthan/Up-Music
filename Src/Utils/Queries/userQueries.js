export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      about
      key_pp
      experiences
      location
      tag
      price
      posts {
        nextToken
        __typename
        items {
          id
          type
          content
          price
          key_media
          location
          tag
          createdAt
          updatedAt
          __typename
        }
      }
      __typename
    }
  }
`;
