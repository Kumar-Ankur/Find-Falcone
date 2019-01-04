import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./presentation/App";
import FindFalcone from "./presentation/FindFalcone";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component = {App} />
      <Route path="/findFalcone" component = {FindFalcone} />
    </div>
  </Router>,
  document.getElementById("root")
);
