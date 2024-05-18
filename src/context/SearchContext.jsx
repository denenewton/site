import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({children}) {
  const [searchText, setSearchText] = useState("");
  const [searchGenre, setSearchGenre] = useState("");

  const value = {
    searchText,
    setSearchText,
    searchGenre,
    setSearchGenre,
  }
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}



