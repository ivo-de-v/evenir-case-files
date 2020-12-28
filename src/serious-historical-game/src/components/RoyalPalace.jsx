import React, { Component } from "react";
import DocumentPreview from "./DocumentPreview";
import MapButton from "./MapButton";
import MyDocumentsButton from "./MyDocumentsButton";
import { exampleText } from "../documentText";

class RoyalPalace extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h1>This is the Royal Palace</h1>
        <DocumentPreview
          preview={exampleText}
          text={exampleText}
        ></DocumentPreview>
        <MapButton></MapButton>
        <MyDocumentsButton></MyDocumentsButton>
      </React.Fragment>
    );
  }
}

export default RoyalPalace;
