import { gql } from '@apollo/client'

export const SIGN_IN = gql`
  mutation Mutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
    createReview(review: $review) {
      id
    }
  }
`

export const SIGN_UP = gql`
  mutation Mutation($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`