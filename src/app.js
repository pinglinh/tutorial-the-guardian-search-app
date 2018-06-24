import React from "react";
import ReactDOM from "react-dom";
import SearchContainer from "./containers/Search";

const App = () => {
  return (
    <div>
      <SearchContainer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
