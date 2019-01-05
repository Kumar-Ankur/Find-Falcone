import React, { Component } from "react";
import Vechile from "../container/Vechile";
import DistanceFromLengaburu from "../presentation/DistanceFromLengaburu";

import Autocomplete from "material-ui/AutoComplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AutoCompleteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: this.props.name,
      selected_planet: {},
      vechile_data: [],
      remaining_vechile: [],
      remaining_planet: this.props.name,
      planetList: this.props.planetList,
      destination_array: [
        "Destination 1",
        "Destination 2",
        "Destination 3",
        "Destination 4"
      ],
      isVisible: {
        vechile1: false,
        vechile2: false,
        vechile3: false,
        vechile4: false
      },
      selected_planet_details: {
        "Destination 1": {
          name: "",
          distance: 0,
          destination: "Destination 1"
        },
        "Destination 2": {
          name: "",
          distance: 0,
          destination: "Destination 2"
        },
        "Destination 3": {
          name: "",
          distance: 0,
          destination: "Destination 3"
        },
        "Destination 4": {
          name: "",
          distance: 0,
          destination: "Destination 4"
        }
      }
    };
  }

  componentDidMount() {
    fetch("https://findfalcone.herokuapp.com/vehicles")
      .then(vechile => vechile.json())
      .then(vechile =>
        this.setState({ vechile_data: vechile, remaining_vechile: vechile })
      );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      planet: nextProps.name,
      remaining_planet: nextProps.name,
      planetList: nextProps.planetList
    });
  }

  FilteredPlanet = (arr, value) => {
    return arr.filter(res => {
      if (res.name === value) {
        return res.distance;
      }
    });
  };

  handleSearch(value, destination) {
    var distance_from_Lengaburu = this.FilteredPlanet(
      this.state.planetList,
      value
    );
    this.state.selected_planet[destination] = value;
    this.setState({ selected_planet: this.state.selected_planet });
    var selectedPlanet = Object.values(this.state.selected_planet);
    let difference_in_planet = this.state.planet.filter(
      planet_name => !selectedPlanet.includes(planet_name)
    );
    this.setState({ remaining_planet: difference_in_planet });
    
    switch (destination) {
      case "Destination 1":
        if (this.state.planet.includes(value)) {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile1: true
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 1": {
                  name: value,
                  distance: distance_from_Lengaburu[0].distance,
                  destination: "Destination 1"
                }
              }
            }
          }));
        } else {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile1: false
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 1": {
                  name: "",
                  distance: 0,
                  destination: "Destination 1"
                }
              }
            }
          }));
        }

        break;

      case "Destination 2":
        if (this.state.planet.includes(value)) {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile2: true
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 2": {
                  name: value,
                  distance: distance_from_Lengaburu[0].distance,
                  destination: "Destination 2"
                }
              }
            }
          }));
        } else {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile2: false
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 2": {
                  name: "",
                  distance: 0,
                  destination: "Destination 2"
                }
              }
            }
          }));
        }
        break;

      case "Destination 3":
        if (this.state.planet.includes(value)) {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile3: true
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 3": {
                  name: value,
                  distance: distance_from_Lengaburu[0].distance,
                  destination: "Destination 3"
                }
              }
            }
          }));
        } else {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile3: false
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 3": {
                  name: "",
                  distance: 0,
                  destination: "Destination 3"
                }
              }
            }
          }));
        }
        break;

      case "Destination 4":
        if (this.state.planet.includes(value)) {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile4: true
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 4": {
                  name: value,
                  distance: distance_from_Lengaburu[0].distance,
                  destination: "Destination 4"
                }
              }
            }
          }));
        } else {
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile4: false
            },
            selected_planet_details: {
              ...prevState.selected_planet_details,
              ...{
                "Destination 4": {
                  name: "",
                  distance: 0,
                  destination: "Destination 4"
                }
              }
            }
          }));
        }
        break;

      default:
        this.setState(prevState => ({
          isVisible: {
            ...prevState.isVisible
          },
          selected_planet_details: {
            ...prevState.selected_planet_details
          }
        }));
        break;
    }
  }

  render() {
    const planetDropDown = this.state.destination_array.map(
      (destination, key) => {
        return (
          <div key={key} className="section-auto">
            <Autocomplete
              key={destination}
              floatingLabelText={destination}
              openOnFocus={true}
              dataSource={this.state.remaining_planet}
              filter={(searchText, key) => true}
              listStyle={{
                maxHeight: 300,
                overflow: "auto",
                backgroundColor: "#f7f7f7",
                overflowY: "hidden"
              }}
              onNewRequest={value => this.handleSearch(value, destination)}
              onUpdateInput={value => this.handleSearch(value, destination)}
            />
          </div>
        );
      }
    );

    return (
      <div>
        <MuiThemeProvider>
          {planetDropDown}
          <Vechile 
          PlanetDetails = {this.state.selected_planet_details} 
          isVisible = {this.state.isVisible}
          remaining_vechile = {this.state.remaining_vechile}/>
        </MuiThemeProvider>
        <DistanceFromLengaburu
          distanceCovered={this.state.selected_planet_details}
        />
      </div>
    );
  }
}

export default AutoCompleteList;
