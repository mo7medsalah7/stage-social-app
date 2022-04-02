import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

//getting the current logged in user

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        username
        posts {
          postData
        }
        followers {
          id
          user {
            id
            username
          }
        }
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  console.log(data);
  return data?.authenticatedItem;
}
