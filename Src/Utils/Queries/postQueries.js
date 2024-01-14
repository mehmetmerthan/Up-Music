export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        post_type
        media_type
        content
        price
        key_media
        city
        country
        content
        tag_all
        tag_roles
        tag_styles
        tag_roles_needed
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
