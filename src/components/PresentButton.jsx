import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { getTextFromStorage } from "../utils/scripts";

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

  const [score, setScore] = useState(calculateScore());

  /*function toPresentScreen() {
    const score = calculateScore();
    props.history.push("/presentscreen", { score: score });
  }*/

  return (
    <>
      <Link to={{ pathname: "/presentscreen", state: { score: score } }}>
        <button onClick={() => setScore(calculateScore())}>
          Present Your Case
        </button>
      </Link>
      {/*<button onClick={() => toPresentScreen()}>Present Your Case </button>*/}
    </>
  );
};

export default withRouter(PresentButton);
