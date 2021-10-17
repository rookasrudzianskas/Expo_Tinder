/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
