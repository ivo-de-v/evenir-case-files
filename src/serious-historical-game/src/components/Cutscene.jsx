import React, { Component } from "react";
import { Link } from "react-router-dom";
import { initialiseHistory, initialiseTime } from "../documentText";

class Cutscene extends Component {
  componentDidMount() {
    initialiseTime(30);
    initialiseHistory([]);
  }
  render() {
    return (
      <div className="centred">
        <p>This is where the initial cutscene will go</p>
        <Link to="/places/mapscreen" className="footer-link-text">
          Ok
        </Link>
      </div>
    );
  }
}

export default Cutscene;
