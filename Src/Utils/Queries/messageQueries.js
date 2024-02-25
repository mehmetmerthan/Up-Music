export const messagesByDate = /* GraphQL */ `
  query MessagesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        hasMessagesReceiver
        hasMessagesSender
        isRead
        key_file
        mime_type
        receiver {
          id
          name
          key_pp
        }
        sender {
          id
          name
          key_pp
        }
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
