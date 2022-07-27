import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const continents = this.props.countries.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.region)) {
          acc.push(curr.region);
        }
        return acc;
      },
      ["select"]
    );
    return (
      <select
        value={this.props.selectedOption}
        onChange={(event) => this.props.onChangeSelect(event.target.value)}
      >
        {continents.map((eachItem) => (
          <option key={eachItem} value={eachItem}>{eachItem}</option>
        ))}
      </select>
    );
  }
}

export default Navbar;
