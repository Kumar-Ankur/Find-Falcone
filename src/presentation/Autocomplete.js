import React, { Component } from "react";
import Vechile from "../container/Vechile";

import Autocomplete from "material-ui/AutoComplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AutoCompleteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: this.props.name,
      selected_planet: {},
      remaining_planet: this.props.name,
      flag: false,
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
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ planet: nextProps.name, remaining_planet: nextProps.name });
  }

  handleSearch(value, destination) {
    this.state.selected_planet[destination] = value;
    this.setState({ selected_planet: this.state.selected_planet });
    var selectedPlanet = Object.values(this.state.selected_planet);
    let difference_in_planet = this.state.planet.filter(
      planet_name => !selectedPlanet.includes(planet_name)
    );
      this.setState({ remaining_planet: difference_in_planet, flag: true })

      switch(destination) {
        case "Destination 1": 
        this.setState(prevState => ({
          isVisible: {
            ...prevState.isVisible,
            vechile1: true
          }
        }))
        break;

          case "Destination 2": 
          this.setState(prevState => ({
          isVisible: {
            ...prevState.isVisible,
            vechile2: true
          }
        }))
          break;

          case "Destination 3": 
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile3: true
            }
          }))
          break;

          case "Destination 4": 
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible,
              vechile4: true
            }
          }))
          break;

          default: 
          this.setState(prevState => ({
            isVisible: {
              ...prevState.isVisible
            }
          }))
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
            />
          </div>
        );
      }
    );

    return (
      <div>
      <MuiThemeProvider>
          { planetDropDown }
          <div className="row">
          <div className="col-1-of-4 vechile vechile__1"> {this.state.isVisible.vechile1 ? <Vechile /> : "" }</div>
          <div className="col-1-of-4 vechile vechile__2"> {this.state.isVisible.vechile2 ? <Vechile /> : "" }</div>
          <div className="col-1-of-4 vechile vechile__3">{this.state.isVisible.vechile3 ? <Vechile /> : "" }</div>
          <div className="col-1-of-4 vechile vechile__4">  {this.state.isVisible.vechile4 ? <Vechile /> : "" }</div>
          </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default AutoCompleteList;