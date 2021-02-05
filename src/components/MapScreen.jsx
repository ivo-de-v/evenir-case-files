import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { getTime } from "../utils/scripts";

class MapScreen extends Component {
  state = { time: getTime() };

  render() {
    return (
      <div className="place-grid map-screen">
        <div className="case-title">
          <h1> My Map</h1>
          <p>It will take you 7 days to travel to any of these locations </p>
        </div>
        <div className="place-documents">
          <ul>
            <li>
              <NavLink to="/royalpalace">Go to the Royal Palace</NavLink>
            </li>
            <li>
              <NavLink to="/treasuryarchives">
                Go to the Treasury Archives
              </NavLink>
            </li>
            <li>
              <NavLink to="/village">Go to Callisto's Village</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer">
          <Footer time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default MapScreen;
