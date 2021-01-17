import React from "react";
import MapButton from "./MapButton";
import MyCaseButton from "./MyCaseButton";
import MyDocumentsButton from "./MyDocumentsButton";
import { withRouter } from "react-router-dom";

const Wrapper = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <div>
        {props.location.pathname === "/places/mapscreen" ? (
          <>
            <MyDocumentsButton></MyDocumentsButton>
            <MyCaseButton></MyCaseButton>
          </>
        ) : (
          <>
            <MapButton></MapButton>
            <MyDocumentsButton></MyDocumentsButton>
            <MyCaseButton></MyCaseButton>
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(Wrapper);
