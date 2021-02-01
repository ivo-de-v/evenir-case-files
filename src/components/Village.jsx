import React, { Component } from "react";
import { updateHistory, updateTime } from "../utils/scripts";
import { exampleVillageText } from "../utils/documentTexts";
import DocumentPreview from "./DocumentPreview";

class Village extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7, false);
  }
  render() {
    return (
      <div className="centred">
        <h1> This is Callisto's Village</h1>
        <p>It will take you 2 days to read the documents here</p>
        <DocumentPreview
          preview={exampleVillageText}
          text={exampleVillageText}
        ></DocumentPreview>
      </div>
    );
  }
}

export default Village;
