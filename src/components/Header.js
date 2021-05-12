import React, { useState } from "react";
import { SEARCHAPI } from "../API_PATH";

function Header({ setmovies }) {
  const [searchText, setsearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") {
      return alert("Please enter valid movie");
    }
    console.log(searchText);
    fetch(SEARCHAPI + searchText)
      .then((response) => response.json())
      .then((data) => {
        setmovies(data.results);
        console.log(data);
      });
  };

  const handleChange = (e) => {
    setsearchText(e.target.value);
  };

  return (
    <div className="header">
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
