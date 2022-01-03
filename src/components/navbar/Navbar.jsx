import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import SearchBar from "../searchBar/SearchBar";

import "./Navbar.css";

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>CookingNinja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
