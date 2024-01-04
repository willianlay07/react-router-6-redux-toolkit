import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        listStyleType: "none",
        paddingLeft: "0px",
      }}
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
      <li>
        <NavLink to="/add-place">Add Place</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
