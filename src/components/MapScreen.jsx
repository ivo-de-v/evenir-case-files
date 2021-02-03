import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MapScreen extends Component {
  render() {
    return (
      <div className="centred map-screen">
        <h1> My Map</h1>
        <ul>
          <li>
            <NavLink to="/places/royalpalace">
              Go to the Royal Palace (time: 7 days)
            </NavLink>
          </li>
          <li>
            <NavLink to="/places/treasuryarchives">
              Go to the Treasury Archives (time: 7 days)
            </NavLink>
          </li>
          <li>
            <NavLink to="/places/village">
              Go to Callisto's Village (time: 7 days)
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MapScreen;
