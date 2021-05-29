import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";

function Header() {
  const [searchText, setsearchText] = useState("");

  const {setmovies}  = useContext(AppContext);

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
