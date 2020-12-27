import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import MyDocumentsButton from "./MyDocumentsButton";

class MapScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <li>
          <NavLink to="/royalpalace">Go to the Royal Palace</NavLink>
        </li>
        <li>
          <NavLink to="/treasuryarchives">Go to the Treasury Archives</NavLink>
        </li>
        <li>
          <NavLink to="/village">Go to Callisto's Village</NavLink>
        </li>
        <MyDocumentsButton></MyDocumentsButton>
      </React.Fragment>
    );
  }
}

export default MapScreen;
