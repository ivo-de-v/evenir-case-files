import React, { Component } from "react";
import DocumentPreview from "./DocumentPreview";
import {
  exampleText,
  getTime,
  updateHistory,
  updateTime,
} from "../documentText";

class RoyalPalace extends Component {
  componentDidMount() {
    console.log("time1", getTime());
    updateHistory();
    updateTime(7);
    console.log("time2", getTime());
  }

  render() {
    return (
      <>
        <h1>This is the Royal Palace</h1>
        <p>It will take you 2 days to read the documents here</p>
        <DocumentPreview
          preview={exampleText}
          text={exampleText}
        ></DocumentPreview>
      </>
    );
  }
}

export default RoyalPalace;
