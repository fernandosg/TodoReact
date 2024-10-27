import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
      }}
    />
  );
}

export { TodoSearch };
