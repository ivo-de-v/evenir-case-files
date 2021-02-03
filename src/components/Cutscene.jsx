import React, { Component } from "react";
import { Link } from "react-router-dom";
import { initialiseHistory, initialiseTime } from "../utils/scripts";

class Cutscene extends Component {
  componentDidMount() {
    initialiseTime(30);
    initialiseHistory([]);
  }
  render() {
    return (
      <div className="centred">
        <p>This is where the initial cutscene will go</p>
        <Link to="/mapscreen" className="footer-link-text">
          Ok
        </Link>
      </div>
    );
  }
}

export default Cutscene;
