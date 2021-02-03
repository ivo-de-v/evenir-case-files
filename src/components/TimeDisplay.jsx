import React, { Component } from "react";
import { getTime } from "../utils/scripts";

class TimeDisplay extends Component {
  //state = { time: this.props.time };

  componentDidMount() {
    window.addEventListener("storage", (event) => {
      this.setState({ time: getTime() });
    });
    /*console.log("state before call", this.state.time);
    const time = getTime();
    console.log("time ", time);
    this.setState({ time: getTime() });
    console.log("state after call", this.state.time);*/
  }

  render() {
    return <p>{this.props.time} days remaining</p>;
  }
}

export default TimeDisplay;
