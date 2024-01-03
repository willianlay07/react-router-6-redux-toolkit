import { useLoaderData } from "react-router-dom";
import PostList from "../features/posts/PostList";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;

export async function loader() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  if (!res.ok) {
    throw Error("Something went wrong!");
  }

  const data = await res.json();

  return data;
}
