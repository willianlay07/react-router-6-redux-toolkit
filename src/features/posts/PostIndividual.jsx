import { useLoaderData } from "react-router-dom";

const PostIndividual = () => {
  const post = useLoaderData();

  return (
    <div>
      <h1>Post Individual: {post.id}</h1>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
    </div>
  );
};

export async function loader({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) {
    throw Error("Something went wrong!");
  }

  const data = await res.json();

  return data;
}

export default PostIndividual;
