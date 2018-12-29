import React, { Component, Fragment } from "react";

import Planet from "../container/Planet";
import Navbar from "../presentation/Navbar";

class FindFalcone extends Component {
  render() {
    return (
      <div className="section-falcone">
        <Navbar />
        <Planet />
        <a href="#" className="navbtn navbtn--animated navbtn--white">
          Are you ready??
        </a>
      </div>
    );
  }
}

export default FindFalcone;
