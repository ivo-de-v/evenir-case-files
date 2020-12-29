import React from "react";
import MapButton from "./MapButton";
import MyDocumentsButton from "./MyDocumentsButton";

const Wrapper = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <MapButton></MapButton>
      <MyDocumentsButton></MyDocumentsButton>
    </>
  );
};

export default Wrapper;
