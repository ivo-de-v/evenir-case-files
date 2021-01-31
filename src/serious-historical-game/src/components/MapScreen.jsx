import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { updateHistory, updateTime } from "../documentText";

class MapScreen extends Component {
  componentDidMount() {
    updateHistory();
  }
  render() {
    return (
      <>
        <ul className="centred">
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
      </>
    );
  }
}

export default MapScreen;
