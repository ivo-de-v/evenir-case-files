import React, { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import MyDocuments from "./MyDocuments";
import RangeSlider from "./RangeSlider";
import CaseHeadingArea from "./CaseHeadingArea";

const MyCase = () => {
  const [hasButton, setButton] = useState(true);

  useEffect(() => {
    const timeFlag = sessionStorage.getItem("timeUp");
    if (timeFlag) {
      setButton(false);
    }
  }, []);

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
        <CaseHeadingArea />
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
