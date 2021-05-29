import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MovieDetail from "./components/MovieDetail";
import AppContextProvider from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="app">
              <Header />
              <Movies />
            </div>
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/search/:query">
            <SearchPage></SearchPage>
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
