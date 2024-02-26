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
        key_pp
        price
        city
        country
        tag_styles
        tag_roles
        user_type
        experiences {
          about
          tag_styles
          tag_roles
          song_name
          song_artist
          song_link
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
