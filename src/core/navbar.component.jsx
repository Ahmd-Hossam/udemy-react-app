import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Advicess</Link> | <Link to="/cards">Cards</Link> |{" "}
      <Link to="/custome-provider">Custom Provider and Hook</Link> |{" "}
      <Link to="/pizza-menu">Pizza</Link> |{" "}
      <Link to="/flash-cards">Flash Cards</Link> |{" "}
      <Link to="/steps">Steps</Link>
      <Link to="/todo"> ToDo List</Link>
    </nav>
  );
}

export default Navbar;
