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
        <li>
          <NavLink to="/places/royalpalace">
            Go to the Royal Palace (time: 7 days)
          </NavLink>
        </li>
        <li>
          <NavLink to="/places/treasuryarchives" onClick={() => updateTime(7)}>
            Go to the Treasury Archives (time: 7 days)
          </NavLink>
        </li>
        <li>
          <NavLink to="/places/village" onClick={() => updateTime(7)}>
            Go to Callisto's Village (time: 7 days)
          </NavLink>
        </li>
      </>
    );
  }
}

export default MapScreen;
