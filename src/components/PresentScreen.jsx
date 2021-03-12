import React from "react";
import { withRouter } from "react-router-dom";
import {
  unhappyCouncilText,
  happyCouncilText,
  dividedCouncilText,
} from "../utils/documentTexts";

const PresentScreen = (props) => {
  const score = props.location.state.score;

  let finalText = "";

  if (score < 4) {
    finalText = unhappyCouncilText;
  } else if (score > 6) {
    finalText = happyCouncilText;
  } else {
    finalText = dividedCouncilText;
  }

  return <p> {finalText}</p>;
};

export default withRouter(PresentScreen);
