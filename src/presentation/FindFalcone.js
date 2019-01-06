import React, { Component } from "react";
import { Link } from "react-router-dom";
import Planet from "../container/Planet";
import Navbar from "./Navbar";
import Footer from "../container/Footer";


class FindFalcone extends Component {
  render() {
    return (
      <div className="section-falcone">
        <Navbar />
        <Planet />
        <section className="section-btn">
          <Link to="/Result">
            <a href="#" className="navbtn navbtn--animated navbtn--white">
              Ready to find??
          </a>
          </Link>
        </section>

        <Footer />
      </div>
    );
  }
}

export default FindFalcone;
