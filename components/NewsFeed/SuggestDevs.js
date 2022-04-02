// #TO-DO
// Handle Following when click Follow

import { useAllUsers } from "../../utils/useAllUsers";
import { Image } from "next/image";
import { useUser } from "../../utils/useUser";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "graphql-tag";

const FOLLOW_ME_MUTATION = gql`
  mutation FOLLOW_ME_MUTATION($userId: ID!) {
    createFollowersCart(data: { user: { connect: { id: $userId } } }) {
      user {
        username
      }
    }
  }
`;

function SuggestDevs() {
  const [isClickedFollow, setIsClickedFollow] = useState(false);
  const [userId, setUserId] = useState("");

  const users = useAllUsers();

  //   const userIdentity = users.map((user) => user.id);

  console.log(users);

  const me = useUser();
  console.log(me);

  // const [follow, { loading, data }] = useMutation(FOLLOW_ME_MUTATION, {
  //   variables: { userId: userId.toString() },
  // });

  // const handleClickFollow = async (userIdentity) => {
  //   setUserId(userIdentity);
  //   setIsClickedFollow(!isClickedFollow);

  //   await follow();
  // };

  return (
    <div>
      <header className="text-xl text-center font-semibold">
        <h3 className="p-2 leading-8">Devs to Follow</h3>
      </header>
      <div className="flex flex-col justify-items-center items-center mt-8">
        {users?.map((user) => {
          return (
            <div className="flex flex-col space-y-4 bg-indigo-50 mb-4 w-2/4 shadow-md p-5">
              <div>
                {/* <Image
                  src="./images/man.png"
                  width={100}
                  height={100}
                  layout="responsive"
                /> */}
              </div>
              <div className="flex justify-between" key={user.id}>
                <p key={user.id} className="text-2xl font-semibold font-mono">
                  {user.username}
                </p>
                <span className="bg-indigo-100 p-2 rounded-full">
                  {user._postsMeta.count}
                </span>
              </div>
              {me?.username !== user.username ? (
                <button className="bg-gray-50 px-2 py-1" key={user.id}>
                  {isClickedFollow ? "Following" : "Follow"}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuggestDevs;
