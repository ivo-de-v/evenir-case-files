import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MapScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <li>
          <NavLink to="/places/royalpalace">Go to the Royal Palace</NavLink>
        </li>
        <li>
          <NavLink to="/places/treasuryarchives">
            Go to the Treasury Archives
          </NavLink>
        </li>
        <li>
          <NavLink to="/places/village">Go to Callisto's Village</NavLink>
        </li>
      </React.Fragment>
    );
  }
}

export default MapScreen;
