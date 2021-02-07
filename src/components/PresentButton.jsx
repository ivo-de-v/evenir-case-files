import React from "react";
import { useHistory } from "react-router-dom";
import { calculateScore, getSliderValue } from "../utils/scripts";

const PresentButton = (headings) => {
  let history = useHistory();

  const toPresentScreen = () => {
    const sliderValue = getSliderValue();
    const score = calculateScore(headings, sliderValue);
    history.push("/presentscreen", { score: score });
  };

  return <button onClick={toPresentScreen}>Present Your Case</button>;
};

export default PresentButton;
