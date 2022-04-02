import LatestPosts from "./LatestPosts";
import SuggestDevs from "./SuggestDevs";

function NewsFeed() {
  return (
    <div className=" grid grid-cols-2 p-6 gap-28">
      <div>
        <LatestPosts />
      </div>
      <div>
        <SuggestDevs />
      </div>
    </div>
  );
}

export default NewsFeed;
