import React, { Component } from "react";
import { exampleVillageText, updateHistory, updateTime } from "../documentText";
import DocumentPreview from "./DocumentPreview";

class Village extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7);
  }
  render() {
    return (
      <>
        <h1> This is Callisto's Village</h1>
        <p>It will take you 2 days to read the documents here</p>
        <DocumentPreview
          preview={exampleVillageText}
          text={exampleVillageText}
        ></DocumentPreview>
      </>
    );
  }
}

export default Village;
