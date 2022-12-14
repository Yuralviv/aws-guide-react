/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem($owner: String) {
    onCreateListItem(owner: $owner) {
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
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem($owner: String) {
    onUpdateListItem(owner: $owner) {
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
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem($owner: String) {
    onDeleteListItem(owner: $owner) {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction($owner: String) {
    onCreateAction(owner: $owner) {
      id
      action
      createdAt
      updatedAt
      listItemActionsId
      owner
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction($owner: String) {
    onUpdateAction(owner: $owner) {
      id
      action
      createdAt
      updatedAt
      listItemActionsId
      owner
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction($owner: String) {
    onDeleteAction(owner: $owner) {
      id
      action
      createdAt
      updatedAt
      listItemActionsId
      owner
    }
  }
`;
