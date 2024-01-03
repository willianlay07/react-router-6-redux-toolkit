import { Outlet, useNavigation } from "react-router-dom";
import Nav from "./Nav";
import Loading from "./Loading";

const Applayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Applayout;
