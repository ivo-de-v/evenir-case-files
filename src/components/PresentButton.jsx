import React from "react";
import { useHistory } from "react-router-dom";
import { calculateScore } from "../utils/scripts";

const PresentButton = (headings) => {
  let history = useHistory();

  const toPresentScreen = () => {
    const score = calculateScore(headings);
    history.push("/presentscreen", { score: score });
  };

  return <button onClick={toPresentScreen}>Present Your Case</button>;
};

export default PresentButton;
