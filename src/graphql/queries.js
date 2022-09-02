/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchLists = /* GraphQL */ `
  query SearchLists(
    $filter: SearchableListFilterInput
    $sort: [SearchableListSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableListAggregationInput]
  ) {
    searchLists(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        title
        description
        imageKey
        listItems {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      title
      description
      imageKey
      listItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
          listListItemsId
          listItemListId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        imageKey
        listItems {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
      id
      title
      quantity
      done
      list {
        id
        title
        description
        imageKey
        listItems {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          listItemActionsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      listListItemsId
      listItemListId
      owner
    }
  }
`;
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        quantity
        done
        list {
          id
          title
          description
          imageKey
          createdAt
          updatedAt
          owner
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        listListItemsId
        listItemListId
        owner
      }
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
      id
      action
      createdAt
      updatedAt
      listItemActionsId
      owner
    }
  }
`;
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        action
        createdAt
        updatedAt
        listItemActionsId
        owner
      }
      nextToken
    }
  }
`;
