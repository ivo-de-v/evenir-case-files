import React from "react";
import { Link } from "react-router-dom";
import { getTextFromStorage } from "../documentText";

const PresentButton = (headings) => {
  function calculateScore() {
    const snippets = getTextFromStorage();
    const headingList = [];
    headingList.push(headings);

    let totalScore = 0;
    for (let i = 0; i < snippets.length; i++) {
      totalScore += snippets[i].score;
    }

    console.log(totalScore);
    return totalScore;
  }

  return (
    <>
      <Link
        to={{ pathname: "/presentscreen", state: { score: calculateScore() } }}
      >
        <button>Present Your Case</button>
      </Link>
    </>
  );
};

export default PresentButton;
