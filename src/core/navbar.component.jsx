import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Advicess</Link>| <Link to="/cards">Cards</Link>|{" "}
      <Link to="/custome-provider">Custom Provider and Hook</Link> |{" "}
      <Link to="/pizza-menu">Pizza</Link>
    </nav>
  );
}

export default Navbar;
