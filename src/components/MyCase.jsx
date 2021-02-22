import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import CaseHeading from "./CaseHeading";
import CloseButton from "./CloseButton";
import MyDocuments from "./MyDocuments";
import PresentButton from "./PresentButton";
import RangeSlider from "./RangeSlider";
import {
  challengePlaceholder,
  defendPlaceholder,
  focusPlaceholder,
} from "../utils/documentTexts";

const MyCase = () => {
  const [hasButton, setButton] = useState(true);

  /* attempt 1 - this works as intended but sometimes you run out of time even when you have > 0 ie 1
  useEffect(() => {
    console.log("this fired before if ");
    console.log("getTime", getTime());
    if (getTime() <= 0) {
      setButton(false);
      console.log("this fired in if");
    }
  }, []);*/

  /* attempt 2 - this does nothing, probably because the event is dispatched before this component ever mounts
  useEffect(() => {
    window.addEventListener("timesUp", (event) => {
      console.log("we are in here");
      setButton(false);
    });
  }, []);*/

  useEffect(() => {
    const timeFlag = sessionStorage.getItem("timeUp");
    if (timeFlag) {
      setButton(false);
    }
  }, []);
  const [headings, setHeadings] = useState([
    {
      id: 1,
      headingName: "Challenge",
      placeholder: challengePlaceholder,
    },
    { id: 2, headingName: "Defend", placeholder: defendPlaceholder },
    { id: 3, headingName: "Focus", placeholder: focusPlaceholder },
  ]);

  const moveHeading = useCallback(
    (dragIndex, hoverIndex) => {
      const dragHeading = headings[dragIndex];
      setHeadings(
        //immutability helper to rearrange the order of the headings without modifying the original array
        update(headings, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragHeading],
          ],
        })
      );
    },
    [headings]
  );
  const renderHeading = (heading, index) => {
    return (
      <CaseHeading
        key={heading.id}
        index={index}
        id={heading.id}
        headingName={heading.headingName}
        moveHeading={moveHeading}
        placeholder={heading.placeholder}
      />
    );
  };

  return (
    <div className="case-grid">
      <div className="case-title">
        <h1>My Case</h1>
        <h3>
          Was sealing the witch Callisto necessary for the good of the kingdom?
        </h3>
        <RangeSlider />
      </div>

      <div className="case-documents">
        <MyDocuments />
      </div>
      <div className="case-headings">
        {headings.map((heading, i) => renderHeading(heading, i))}
        <PresentButton headings={headings} />
      </div>

      {hasButton ? (
        <div className="case-closebutton">
          <CloseButton />
        </div>
      ) : null}
    </div>
  );
};

export default MyCase;
