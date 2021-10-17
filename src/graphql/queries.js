/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      User1ID
      User2ID
      isMatch
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User1ID
        User2ID
        isMatch
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        User1 {
          id
          name
          image
          bio
          gender
          lookingFor
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        User2 {
          id
          name
          image
          bio
          gender
          lookingFor
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMatches = /* GraphQL */ `
  query SyncMatches(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        User1ID
        User2ID
        isMatch
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        User1 {
          id
          name
          image
          bio
          gender
          lookingFor
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        User2 {
          id
          name
          image
          bio
          gender
          lookingFor
          sub
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      bio
      gender
      lookingFor
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
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
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
