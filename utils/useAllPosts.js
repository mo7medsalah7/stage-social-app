import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

export const USER_POSTS = gql`
  query USER_POSTS {
    allPosts {
      id
      postData

      author {
        username
      }
    }
  }
`;

export function useAllPosts() {
  const { data } = useQuery(USER_POSTS);

  return data?.allPosts;
}
