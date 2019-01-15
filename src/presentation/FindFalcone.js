import React, { Component } from 'react';

import Planet from '../container/Planet';
import Navbar from './Navbar';
import Footer from '../container/Footer';

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
        <Planet />
        <section className="section-btn" />
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

