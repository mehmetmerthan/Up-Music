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
        content
        tag_all
        tag_roles
        tag_styles
        createdAt
        updatedAt
        __typename
        owner {
          name
          key_pp
          id
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
      nextToken
      __typename
    }
  }
`;
