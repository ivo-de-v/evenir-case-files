import React, { useState, useCallback } from "react";
import {
  challengePlaceholder,
  defendPlaceholder,
  focusPlaceholder,
} from "../utils/documentTexts";
import update from "immutability-helper";
import CaseHeading from "./CaseHeading";
import PresentButton from "./PresentButton";

const CaseHeadingArea = () => {
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
    <div className="heading-area-grid">
      <div className="case-title">
        <h1>Case Sections</h1>
        <p>
          Drag sentences from documents into one or more of the sections below
        </p>
      </div>
      <div className="heading-area-headings">
        {headings.map((heading, i) => renderHeading(heading, i))}
      </div>
      <div className="heading-area-present">
        <PresentButton headings={headings} />
      </div>
    </div>
  );
};

export default CaseHeadingArea;
