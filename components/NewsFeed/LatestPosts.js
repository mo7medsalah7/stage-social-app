import { useAllPosts } from "../../utils/useAllPosts";

function LatestPosts() {
  const posts = useAllPosts();

  return (
    <div>
      <header className="text-xl  font-semibold">
        <h3 className="p-2 leading-8">Latest Posts</h3>
      </header>
      <ul className="flex flex-col p-2 space-y-4">
        {posts?.map((post) => {
          return (
            <li
              key={post.id}
              className="flex flex-col shadow-md rounded-lg p-6"
            >
              <span className="w-min bg-red-500 mb-2 text-white p-1">
                {post.author.username}
              </span>

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

export default LatestPosts;
