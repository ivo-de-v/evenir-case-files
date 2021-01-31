import React from "react";
import MapButton from "./MapButton";
import MyCaseButton from "./MyCaseButton";
import MyDocumentsButton from "./MyDocumentsButton";
import { withRouter } from "react-router-dom";
import TimeDisplay from "./TimeDisplay";

const Wrapper = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <div>
        {props.location.pathname === "/places/mapscreen" ? (
          <>
            <div className="footer">
              <MyDocumentsButton></MyDocumentsButton>
              <MyCaseButton></MyCaseButton>
              <TimeDisplay></TimeDisplay>
            </div>
          </>
        ) : (
          <>
            <div className="footer">
              <MapButton></MapButton>
              <MyDocumentsButton></MyDocumentsButton>
              <MyCaseButton></MyCaseButton>
              <TimeDisplay></TimeDisplay>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(Wrapper);
