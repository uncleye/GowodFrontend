import {gql} from 'apollo-boost';

/**
 * @description holds user graphql mutations createUser($input: CreateUserInput!)
 */

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      firstname
      lastname      
      password
      age
      genre
    }
  }
`;


