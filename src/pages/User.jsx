import { useSelector } from "react-redux";
import ViewUser from "../features/user/ViewUser";
import CreateUser from "../features/user/CreateUser";

const User = () => {
  const username = useSelector((store) => store.user.username);

  return (
    <div>
      <h1>User</h1>
      {username ? <ViewUser /> : <CreateUser />}
    </div>
  );
};

export default User;
