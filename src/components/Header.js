import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SEARCHAPI } from "../API_PATH";

function Header({ setmovies, showPage, setshowPage }) {
  const [searchText, setsearchText] = useState("");

  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") {
      return alert("Please enter valid movie");
    }
    fetch(SEARCHAPI + searchText)
      .then((response) => response.json())
      .then((data) => {
        setmovies(data.results);
        setshowPage(false);
        console.log(data);
        history.push("/search");
      });
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
