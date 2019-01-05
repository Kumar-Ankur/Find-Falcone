import React, { Component } from "react";
import AutocompleteList from "./Autocomplete";

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet_list: [],
      planet_name: [],
      message: ""
    };
  }

  componentDidMount() {
    console.log("==========call planet API to fetch the data =============");

    fetch("https://findfalcone.herokuapp.com/planets")
      .then(list => list.json())
      .then(list => {
        console.log("********* Data Feched successfully ***********");
        this.setState({
          planet_list: list,
          message: "",
          planet_name: Object.keys(
            list
              .map(res_name => res_name.name)
              .reduce((a, b) => {
                a[b] = 0;
                return a;
              }, {})
          )
        });
      })
      .catch(err => {
        if (err.message === "Failed to fetch") {
          this.setState({ message: "Please check your network connection." });
        }
        console.log(err);
        throw new TypeError(err);
      });
  }

  render() {
    console.log(this.state.message);
    return (
      <main>
        <section className="section-planet">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="section-planet__heading">
              Select Planets and Vechiles to find Falcone
            </h2>
          </div>
          <AutocompleteList
            name={this.state.planet_name}
            planetList={this.state.planet_list}
          />
          <span className="section-planet__error">{this.state.message}</span>
        </section>
      </main>
    );
  }
}

export default Planet;
