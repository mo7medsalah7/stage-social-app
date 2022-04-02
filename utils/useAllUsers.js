import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const ALL_USERS = gql`
  query ALL_USERS {
    allUsers {
      id
      username
      _postsMeta {
        count
      }
    }
  }
`;

export function useAllUsers() {
  const { data } = useQuery(ALL_USERS);
  return data?.allUsers;
}
