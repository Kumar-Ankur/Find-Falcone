import React, { Component, Fragment } from "react";

import Planet from "../container/Planet";
import Navbar from "./Navbar";
import Time from "../container/Time";
import Footer from "./Footer";

class FindFalcone extends Component {
  render() {
    return (
      <div className="section-falcone">
        <Navbar />
        <Time />
        <Planet />
        <section className="section-btn">
          <a href="#" className="navbtn navbtn--animated navbtn--white">
            Ready to find??
          </a>
          
        </section>
        <Footer />
      </div>
    );
  }
}

export default FindFalcone;
