import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

class MapScreen extends Component {
  render() {
    return (
      <div className="place-grid map-screen">
        <div className="case-title">
          <h1> My Map</h1>
        </div>
        <div className="place-documents">
          <ul>
            <li>
              <NavLink to="/royalpalace">
                Go to the Royal Palace (time: 7 days)
              </NavLink>
            </li>
            <li>
              <NavLink to="/treasuryarchives">
                Go to the Treasury Archives (time: 7 days)
              </NavLink>
            </li>
            <li>
              <NavLink to="/village">
                Go to Callisto's Village (time: 7 days)
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default MapScreen;
