import React, { Component } from "react";
import { getTime } from "../documentText";

class TimeDisplay extends Component {
  state = { time: getTime() };

  componentDidMount() {
    window.addEventListener("storage", (event) => {
      this.setState({ time: getTime() });
    });
    this.setState({ time: getTime() });
  }

  render() {
    return <span>{this.state.time} days remaining</span>;
  }
}

export default TimeDisplay;
