import React, { Component, Fragment } from "react";

import Planet from "../container/Planet";
import Navbar from "./Navbar";
import Time from "../container/Time";
import Footer from "../container/Footer";

import { connect } from "react-redux";
import * as actions from "../store/actions";

class FindFalcone extends Component {

  componentDidMount() {
    this.props.loadVechileDetail();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    loadVechileDetail: ()  => dispatch(actions.loadVechileDetails())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FindFalcone);

