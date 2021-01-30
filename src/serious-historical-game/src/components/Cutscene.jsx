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
      <>
        <p>This is where the initial cutscene will go</p>
        <Link to="/places/mapscreen">Ok</Link>
      </>
    );
  }
}

export default Cutscene;
