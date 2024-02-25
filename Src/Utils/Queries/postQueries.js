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
        place
        content
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
      }
      nextToken
      __typename
    }
  }
`;
