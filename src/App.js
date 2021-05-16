import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const [showPage, setshowPage] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path='/movie/:id' >
        <MovieDetail />
        </Route>
        <Route path="/search">
          <SearchPage movies={movies}></SearchPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
