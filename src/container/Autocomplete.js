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
      searchText: {
        "Destination 1": {
          text: ""
        },
        "Destination 2": {
          text: ""
        },
        "Destination 3": {
          text: ""
        },
        "Destination 4": {
          text: ""
        }
      },
      selected_planet: {},
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
      )
      .catch(error => {
        throw new TypeError(error);
      });
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

  setPlanetDetails = (value, destination, vechile) => {
    var distance_from_Lengaburu = this.FilteredPlanet(
      this.state.planetList,
      value
    );
    if (this.state.planet.includes(value)) {
      var visible = { ...this.state.isVisible };
      var selectedVechile = { ...this.state.selected_planet_details };
      if (vechile === "vechile1") {
        visible.vechile1 = true;
        selectedVechile[destination] = {
          name: value,
          distance: distance_from_Lengaburu[0].distance,
          destination: "Destination 1"
        };
      } else if (vechile === "vechile2") {
        visible.vechile2 = true;
        selectedVechile[destination] = {
          name: value,
          distance: distance_from_Lengaburu[0].distance,
          destination: "Destination 2"
        };
      } else if (vechile === "vechile3") {
        visible.vechile3 = true;
        selectedVechile[destination] = {
          name: value,
          distance: distance_from_Lengaburu[0].distance,
          destination: "Destination 3"
        };
      } else if (vechile === "vechile4") {
        visible.vechile4 = true;
        selectedVechile[destination] = {
          name: value,
          distance: distance_from_Lengaburu[0].distance,
          destination: "Destination 4"
        };
      }

      this.setState(vechile => ({
        isVisible: visible,
        selected_planet_details: selectedVechile
      }));
    } else {
      var visible = { ...this.state.isVisible };
      var selectedVechile = { ...this.state.selected_planet_details };
      if (vechile === "vechile1") {
        visible.vechile1 = false;
        selectedVechile[destination] = {
          name: "",
          distance: 0,
          destination: "Destination 1"
        };
      } else if (vechile === "vechile2") {
        visible.vechile2 = false;
        selectedVechile[destination] = {
          name: "",
          distance: 0,
          destination: "Destination 2"
        };
      } else if (vechile === "vechile3") {
        visible.vechile3 = false;
        selectedVechile[destination] = {
          name: "",
          distance: 0,
          destination: "Destination 3"
        };
      } else if (vechile === "vechile4") {
        visible.vechile4 = false;
        selectedVechile[destination] = {
          name: "",
          distance: 0,
          destination: "Destination 4"
        };
      }
      this.setState(vechile => ({
        isVisible: visible,
        selected_planet_details: selectedVechile
      }));
    }
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
    let isVisibleKey = Object.keys(this.state.isVisible);
    switch (destination) {
      case "Destination 1":
        this.setState({ searchText: {
          ...this.state.searchText,
          ...{"Destination 1" : {text: value}}
        }})
        this.setPlanetDetails(value, "Destination 1", isVisibleKey[0]);
        break;

      case "Destination 2":
      this.setState({ searchText: {
        ...this.state.searchText,
        ...{"Destination 2" : {text: value}}
      }})
        this.setPlanetDetails(value, "Destination 2", isVisibleKey[1]);
        break;

      case "Destination 3":
      this.setState({ searchText: {
        ...this.state.searchText,
        ...{"Destination 3" : {text: value}}
      }})
        this.setPlanetDetails(value, "Destination 3", isVisibleKey[2]);
        break;

      case "Destination 4":
      this.setState({ searchText: {
        ...this.state.searchText,
        ...{"Destination 4" : {text: value}}
      }})
        this.setPlanetDetails(value, "Destination 4", isVisibleKey[3]);
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

  onResetPressed = () => {
    this.setState({ 
      selected_planet: {},
      remaining_planet: this.props.name,
      searchText: {
        "Destination 1": {
          text: ""
        },
        "Destination 2": {
          text: ""
        },
        "Destination 3": {
          text: ""
        },
        "Destination 4": {
          text: ""
        }
      },
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
    })
  }

  render() {
    console.log(this.state.searchText)
    const planetDropDown = this.state.destination_array.map(
      (destination, key) => {
        return (
          <div key={key} className="section-auto">
            <Autocomplete
              key={destination}
              floatingLabelText={destination}
              openOnFocus={true}
              searchText= {this.state.searchText[destination].text}
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
        <a href="#" className="reset navbar__text--separator navbtn navbtn--animated navbtn--white" onClick={this.onResetPressed}>
              Reset
            </a>
          {planetDropDown}
          <Vechile
            PlanetDetails={this.state.selected_planet_details}
            isVisible={this.state.isVisible}
            remaining_vechile={this.state.remaining_vechile}
          />
        </MuiThemeProvider>
        <DistanceFromLengaburu
          distanceCovered={this.state.selected_planet_details}
        />
      </div>
    );
  }
}

export default AutoCompleteList;
