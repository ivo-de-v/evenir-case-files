import React, { Component } from "react";
import { exampleVillageText } from "../documentText";
import DocumentPreview from "./DocumentPreview";

class Village extends Component {
  state = {};
  render() {
    return (
      <>
        <h1> This is Callisto's Village</h1>
        <DocumentPreview
          preview={exampleVillageText}
          text={exampleVillageText}
        ></DocumentPreview>
      </>
    );
  }
}

export default Village;
