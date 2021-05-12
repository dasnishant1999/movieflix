import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  const [movies, setmovies] = useState([]);

  return (
    <div className="app">
      <Header movies={movies} setmovies={setmovies} />
      <Movies movies={movies} setmovies={setmovies} />
    </div>
  );
}

export default App;
