import React, { Component } from "react";
import Slider from "react-rangeslider";
import { storeSliderValue } from "../utils/scripts";

class RangeSlider extends Component {
  state = { currentValue: 2 };

  handleChange = (value) => {
    this.setState({ currentValue: value });
  };

  onChangeComplete = () => {
    storeSliderValue(this.state.currentValue);
  };

  render() {
    const labels = {
      0: "Strongly disagree",
      1: "|",
      2: "Neutral",
      3: "|",
      4: "Strongly agree",
    };
    return (
      <>
        <Slider
          min={0}
          max={4}
          value={this.state.currentValue}
          tooltip={false}
          labels={labels}
          onChange={this.handleChange}
          onChangeComplete={this.onChangeComplete}
        />
      </>
    );
  }
}

export default RangeSlider;
