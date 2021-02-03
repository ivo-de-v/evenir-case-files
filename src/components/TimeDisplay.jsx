import React, { Component } from "react";
import { getTime } from "../utils/scripts";

class TimeDisplay extends Component {
  state = { time: getTime() };

  componentDidMount() {
    window.addEventListener("storage", (event) => {
      this.setState({ time: getTime() });
    });
    this.setState({ time: getTime() });
  }

  render() {
    return <p>{this.state.time} days remaining</p>;
  }
}

export default TimeDisplay;
