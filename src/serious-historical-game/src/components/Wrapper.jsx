import React from "react";
import MapButton from "./MapButton";
import MyCaseButton from "./MyCaseButton";
import MyDocumentsButton from "./MyDocumentsButton";

const Wrapper = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <MapButton></MapButton>
      <MyDocumentsButton></MyDocumentsButton>
      <MyCaseButton></MyCaseButton>
    </>
  );
};

export default Wrapper;
