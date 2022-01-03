import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!term) {
      navigate("/");
      return;
    }

    navigate(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input id="search" onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchBar;
