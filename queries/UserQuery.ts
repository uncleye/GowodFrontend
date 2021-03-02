import {gql} from 'apollo-boost';
import {User} from '../models/UserModel';

/**
 * @description holds user graphql queries
 */

export interface GetUserVars {
  id: string;
}

export interface UsersData {
  users: User[];
}
export interface AuthInputData {
  eamil:string,
  password:string
}

export const GET_USER = gql`
  query {
    user(id: $id) {
      id
      name
      email
      age
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      firstname
      email
      age
    }
  }
`;
export const LOG_IN = gql`
  query {
    login(email:String, password: String) {
      userId
      token
      tokenExpiration
    }
  }
`;
