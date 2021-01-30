import React, { Component } from "react";
import { getTime } from "../documentText";

class TimeDisplay extends Component {
  state = { time: getTime() };

  componentDidMount() {
    window.addEventListener("storage", (event) => {
      this.setState({ time: getTime() });
    });
    this.setState({ time: getTime() });
    console.log("so help me god", this.state.time);
  }

  render() {
    {
      console.log("time in render", getTime());
    }
    return <span>{this.state.time} days remaining</span>;
  }
}

export default TimeDisplay;
