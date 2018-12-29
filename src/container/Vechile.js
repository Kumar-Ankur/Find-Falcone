import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

const styles = {
  block: {
    maxWidth: 250,
    paddingTop: 50
  },
  radioButton: {
    marginBottom: 16,
    fontSize: "17px",
    marginTop: "40px"
  }
};


class Vechile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vechile_list: []
    };
  }

  componentDidMount() {
    fetch("https://findfalcone.herokuapp.com/vehicles")
      .then(vechile => vechile.json())
      .then(vechile => this.setState({ vechile_list: vechile }));
  }

  render() {
    const renderVechile = this.state.vechile_list.map(vech => {
        return(
            <RadioButton
            value= {`${vech.name}`}
            label={`${vech.name} (${vech.total_no})`}
            style={styles.radioButton}
          />
        )
    })

    return (
      <div className="section-vechile">
        <MuiThemeProvider>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
         { renderVechile }
        </RadioButtonGroup>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Vechile;
