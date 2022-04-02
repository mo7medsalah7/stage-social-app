import { useUser } from "../../utils/useUser";
import { USER_POSTS } from "./../../utils/useAllPosts";

function UserPosts() {
  const me = useUser();

  return (
    <div>
      <header className="text-xl  font-semibold">
        <h3 className="p-2 leading-8">My Posts:</h3>
      </header>
      <ul className="flex flex-col p-2 space-y-4">
        {me?.posts?.map((post) => {
          return (
            <li
              key={post.id}
              className="flex flex-col shadow-md rounded-lg p-6"
            >
              <div className="font-semibold md:pr-18 py-2 px-8">
                {post.postData}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserPosts;
