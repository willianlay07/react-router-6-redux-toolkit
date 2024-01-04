import { useState } from "react";
import Input from "../ui/Input";
import { Form } from "react-router-dom";
import { createPlace } from "../services/apiPlace";
import { useNavigation } from "react-router-dom";
import Loading from "../ui/Loading";

const AddPlace = () => {
  const navigation = useNavigation();
  const [place, setPlace] = useState("");

  if (navigation.state === "submitting") return <Loading />;

  return (
    <Form method="post">
      <h1>Add Place</h1>
      <Input type="text" user={place} setUser={setPlace} name="name" />
    </Form>
  );
};

export default AddPlace;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const newPlace = await createPlace(data);
  console.log(newPlace);

  return null;
}
