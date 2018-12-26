import React, { Component } from "react";
import Autocomplete from "material-ui/AutoComplete";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AutoCompleteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      name: []
    };
  }

  componentDidMount() {
    this.setState({ name: this.props.name });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ name: nextProps.name});
  }

  handleSearch(e) {
    this.setState({ search: e });
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
            listStyle={{ maxHeight: 300, overflow: "auto" }}
            onNewRequest={value => this.handleSearch.call(this, value)}
            onUpdateInput={value => this.handleSearch.call(this, value)}
          />
        </MuiThemeProvider>
      </section>
    );
  }
}

export default AutoCompleteList;
