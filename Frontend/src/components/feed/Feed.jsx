import Share from "./share/Share";
import "./feed.css";
import Post from "./post/Post";
import  {Posts}  from "../../dummyData";

export default function Feed() {

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post post={p} key={p.id} />
          
        ))}
      </div>
    </div>
  );
}
