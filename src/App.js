import React, { Component } from "react";
import countries from "./countries.json";
import CountryList from "./components/countryListComponent";
import Navbar from "./components/navBar";
class App extends Component {
  state = { countries: countries, selectedOption: "select" };
  onChangeSelect = (value) => {
    const selectedCountries =
      value !== "select"
        ? countries.reduce((acc, curr) => {
            if (curr.region === value) {
              acc.push(curr);
            }
            return acc;
          }, [])
        : countries;
    this.setState({ selectedOption: value, countries: selectedCountries });
  };
  render() {
    return (
      <div>
        <nav style={{ width: "100%", textAlign: "center" }}>
          <Navbar
            countries={countries}
            selectedOption={this.state.selectedOption}
            onChangeSelect={this.onChangeSelect}
          />
        </nav>
        <CountryList countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
