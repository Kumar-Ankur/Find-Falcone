import React, { Component } from "react";
import AutocompleteList from "../presentation/Autocomplete";

class Planet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet_list: [],
      planet_name: []
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
        throw new TypeError(err);
      });
  }

  render() {
    
    return (
      <main>
        <section className="section-planet">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              &larr; Select Planets and Vechiles to find Falcone &rarr;
            </h2>
          </div>
          <AutocompleteList name={this.state.planet_name} />
        </section>
      </main>
    );
  }
}

export default Planet;
