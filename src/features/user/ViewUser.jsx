import { useSelector } from "react-redux";

const ViewUser = () => {
  const user = useSelector((store) => store.user.username);

  return <div>Welcome: {user}</div>;
};

export default ViewUser;
