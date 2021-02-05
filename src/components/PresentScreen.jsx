import React from "react";
import { withRouter } from "react-router-dom";

const PresentScreen = (props) => {
  const score = props.location.state.score;
  const sliderValue = props.location.state.sliderValue;
  console.log("sliderValue", sliderValue);

  return <p> congratulations, your score is {score}</p>;
};

export default withRouter(PresentScreen);
