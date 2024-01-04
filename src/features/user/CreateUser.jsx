import { useState } from "react";
import Input from "../../ui/Input";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";

const CreateUser = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    console.log(user);
    if (!user) return;

    dispatch(updateName(user));
  };

  return (
    <form onSubmit={handleForm}>
      <Input type="text" user={user} setUser={setUser} name="" />
    </form>
  );
};

export default CreateUser;
