import React, { useCallback, useState } from "react";
import update from "immutability-helper";
import CaseHeading from "./CaseHeading";
import CloseButton from "./CloseButton";
import MyDocuments from "./MyDocuments";
import PresentButton from "./PresentButton";

const MyCase = () => {
  const [headings, setHeadings] = useState([
    { id: 1, headingName: "Challenge" },
    { id: 2, headingName: "Defend" },
    { id: 3, headingName: "Focus" },
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
      />
    );
  };

  return (
    <div className="case-grid">
      <div className="case-title">
        <h1>My Case</h1>
        <h3>Case Question</h3>
      </div>

      <div className="case-documents">
        <MyDocuments />
      </div>
      <div className="case-headings">
        {headings.map((heading, i) => renderHeading(heading, i))}
        <PresentButton headings={headings}></PresentButton>
      </div>

      <div className="case-closebutton">
        <CloseButton></CloseButton>
      </div>
    </div>
  );
};

export default MyCase;
