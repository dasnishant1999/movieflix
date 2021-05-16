import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Header({ setmovies, showPage, setshowPage }) {
  const [searchText, setsearchText] = useState("");

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") {
      return alert("Please enter valid movie");
    }
    setmovies();
    history.push(`/search/${searchText}`);
  };

  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  return (
    <div className="header">
      <h3>Movieflix</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies"
          className="search-box"
          value={searchText}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
}

export default Header;
