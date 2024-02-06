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
        receiver {
          id
          name
        }
        sender {
          id
          name
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
