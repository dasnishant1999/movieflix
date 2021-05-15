import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const [showPage, setshowPage] = useState(false);

  return (
    <div className="app">
      <Header
        movies={movies}
        setmovies={setmovies}
        pageNo={pageNo}
        setpageNo={setpageNo}
        showPage={showPage}
        setshowPage={setshowPage}
      />
      <Movies
        movies={movies}
        setmovies={setmovies}
        pageNo={pageNo}
        setpageNo={setpageNo}
        showPage={showPage}
        setshowPage={setshowPage}
      />
    </div>
  );
}

export default App;
