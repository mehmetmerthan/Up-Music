export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      about
      key_pp
      experiences {
        about
        tag_styles
        tag_roles
        song_name
        song_artist
        song_link
      }
      city
      country
      tag_styles
      tag_roles
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
          city
          country
          tag_roles
          tag_styles
          tag_roles_needed
          createdAt
          updatedAt
          __typename
        }
      }
      __typename
    }
  }
`;
