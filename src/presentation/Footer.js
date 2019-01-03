import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
     
    ];
    return (
      <section className="section-footer">
      <a href="#" onClick={this.handleOpen} className="section-footer_link">Why Vehicle Name disable?</a>
      <MuiThemeProvider>
      <Dialog
          title="Disable radio button reasons:"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <ul className="section-footer_list">
            <li className="section-footer_list-1">Selected Planet distance is greater than the Vechile max distance.</li>
            <li className="section-footer_list-2">Count of the Vechile turns to 0 as it went to another planet.</li>
          </ul>
        </Dialog>
        </MuiThemeProvider>
      </section>
    );
  }
}

export default Footer;
