
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>TaskTracker</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Header;