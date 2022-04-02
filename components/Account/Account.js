import Post from "./Post";
import UserPosts from "./UserPosts";
import { useUser } from "../../utils/useUser";

function Account() {
  const me = useUser();
  return (
    <div className="p-8 my-0 flex-grow mx-auto lg:space-y-20 ">
      <div className="flex items-center">
        <p className="mr-2 font-mono">{me.username} devs: </p>
        <ul className="flex space-x-3 ">
          <li className=" bg-red-300 text-white p-1 shadow-sm">Javascript</li>
          <li className=" bg-red-300 text-white p-1 shadow-sm">Rust</li>
          <li className=" bg-red-300 text-white p-1 shadow-sm">Go</li>
          <li className=" bg-red-300 text-white p-1 shadow-sm">Typescript</li>
        </ul>
      </div>
      <div>
        <Post />
      </div>
      <div>
        <UserPosts />
      </div>
    </div>
  );
}

export default Account;
