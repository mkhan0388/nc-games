
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../contexts/userContext";
const Nav = () => {
  // const { user, setUser } = useContext(UserContext);

  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/categories">Categories </Link>
      <Link to={`/users/tickle122`}>User</Link>
    </nav>
  );
};

export default Nav;
