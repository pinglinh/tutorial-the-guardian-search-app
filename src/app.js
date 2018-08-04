import React from "react";
import ReactDOM from "react-dom";
import SearchContainer from "./containers/Search";

const App = () => {
  return <SearchContainer />;
};

ReactDOM.render(<App />, document.getElementById("app"));
