import React, { Component } from "react";
import Vechile from "../container/Vechile";

import Autocomplete from "material-ui/AutoComplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AutoCompleteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      name: [],
      flag: false
    };
  }

  componentDidMount() {
    this.setState({ name: this.props.name });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name });
  }

  handleSearch(val) {
    if (val !== "") {
      this.setState({ search: val, flag: true });
    } else {
      this.setState({ flag: false });
    }
  }

  render() {
    return (
      <section className="section-auto">
        <MuiThemeProvider>
          <Autocomplete
            floatingLabelText="Select Planet"
            openOnFocus={true}
            dataSource={this.state.name}
            searchText={this.state.searchText}
            filter={(searchText, key) => key.indexOf(searchText) !== -1}
            listStyle={{
              maxHeight: 300,
              overflow: "auto",
              backgroundColor: "#f7f7f7",
              overflowY: "hidden"
            }}
            onNewRequest={value => this.handleSearch.call(this, value)}
            onUpdateInput={value => this.handleSearch.call(this, value)}
          />

          {this.state.flag ? <Vechile /> : "" }
        </MuiThemeProvider>
      </section>
    );
  }
}

export default AutoCompleteList;
