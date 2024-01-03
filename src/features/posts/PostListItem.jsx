import { Link } from "react-router-dom";

const PostListItem = ({ id, title, body }) => {
  return (
    <li>
      <h4>
        <Link to={`/posts/${id}`}>{title}</Link>
      </h4>
      <p>{body}</p>
    </li>
  );
};

export default PostListItem;
