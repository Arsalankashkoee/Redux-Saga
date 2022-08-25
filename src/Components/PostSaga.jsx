import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchPostRequest } from "../Redux/Posts/postActions";

const PostSags = () => {
  const [postId, setPostId] = useState("");

  const post = useSelector((state) => state);
  const { loading, error, posts } = post;

  const dispatch = useDispatch();

  return (
    <section className="mt-7">
      <div className="container flex flex-col items-center justify-center gap-5">
        <h1 className="">Redux Saga MiddleWare</h1>
        <input
          type="text"
          className="outline-none border border-gray-200 focus:border-violet-600 py-1 px-3 shadow-lg rounded-md"
          placeholder="Enter number of post ..."
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button
          className="bg-violet-500 text-white py-1 px-3 rounded-lg shadow-lg"
          onClick={() => dispatch(fetchPostRequest(postId || 1))}
        >
          Get post
        </button>
      </div>
      <div className="mt-11">
        <div className="container flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center ">
              <div className="w-16 h-16 border-b-2 border-violet-900 rounded-full animate-spin mt-2"></div>
              <div className="mt-2 text-violet-800">loading</div>
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : posts.title ? (
            <div className="flex flex-col gap-3 ">
              <p>post title : {posts.title}</p>
              <p>post body : {posts.body}</p>
            </div>
          ) : (
            <p>fetch some post</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostSags;
