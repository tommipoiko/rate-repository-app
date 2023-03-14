import { gql } from '@apollo/client'

export const ALL_REPOSITORIES = gql`
  query($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`

export const WHOAMI = gql`
  query Query {
    me {
      username
      id
    }
  }
`

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      url
      ownerAvatarUrl
      description
      forksCount
      language
      stargazersCount
      ratingAverage
      reviewCount
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const MY_REVIEWS = gql`
  query {
    me {
      reviews {
        edges {
          node {
            createdAt
            rating
            text
            repository {
              fullName
            }
          }
        }
      }
    }
  }
`