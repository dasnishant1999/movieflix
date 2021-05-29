import React, { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [movies, setmovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const [showPage, setshowPage] = useState(false);

  const value = {
    movies,
    setmovies,
    pageNo,
    setpageNo,
    showPage,
    setshowPage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
