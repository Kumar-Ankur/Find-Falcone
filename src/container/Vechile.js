import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

import { connect } from "react-redux";
import * as actions from "../store/actions";

const styles = {
  block: {
    maxWidth: 250,
    paddingTop: 50
  },
  radioButton: {
    marginBottom: 16,
    fontSize: "15px",
    marginTop: "40px"
  }
};

class Vechile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vechile_list: [],
      PlanetDetails: this.props.PlanetDetails,
      vechile_name: "",
      selectedVechile: []
    };
  }

  componentDidMount() {
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ PlanetDetails: nextProps.PlanetDetails });
  }

  filteredData = (value, vechileDetails) => {
    let selectedVechile = vechileDetails.filter(checkedVechile => {
      if (checkedVechile.name === value) {
        return checkedVechile;
      }
    });
    return selectedVechile;
  };

  vechileSelected = (value, PlanetDetails, vechileDetails) => {
    console.log(value, PlanetDetails, selectedVechile, vechileDetails);
  };

  render() {
    const renderVechile = this.props.vechileDetail.map(vech => {
      if (this.state.PlanetDetails.distance > vech.max_distance) {
        return (
          <RadioButton
            value={`${vech.name}`}
            label={`${vech.name} (${vech.total_no})`}
            style={styles.radioButton}
            disabled={true}
          />
        );
      } else {
        return (
          <RadioButton
            value={`${vech.name}`}
            label={`${vech.name} (${vech.total_no})`}
            style={styles.radioButton}
          />
        );
      }
    });

    return (
      <div className="section-vechile">
        <MuiThemeProvider>
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="not_light"
            onChange={(event, value) =>
              this.vechileSelected(
                value,
                this.state.PlanetDetails,
                this.state.vechile_list
              )
            }
          >
            {renderVechile}
          </RadioButtonGroup>
        </MuiThemeProvider>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    vechileDetail: state.vechile
  };
};


export default connect(mapStateToProps)(Vechile);
