import React from "react";
import MapButton from "./MapButton";
import MyCaseButton from "./MyCaseButton";
import MyDocumentsButton from "./MyDocumentsButton";
import { withRouter } from "react-router-dom";
import TimeDisplay from "./TimeDisplay";

const Footer = (props) => {
  return (
    <>
      {props.location.pathname === "/places/mapscreen" ? (
        <>
          <div className="footer-inner">
            <MyDocumentsButton></MyDocumentsButton>
            <MyCaseButton></MyCaseButton>
            <TimeDisplay time={props.time}></TimeDisplay>
          </div>
        </>
      ) : (
        <>
          <div className="footer-inner">
            <MapButton></MapButton>
            <MyDocumentsButton></MyDocumentsButton>
            <MyCaseButton></MyCaseButton>
            <TimeDisplay time={props.time}></TimeDisplay>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(Footer);
