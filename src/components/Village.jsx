import React, { Component } from "react";
import { updateHistory, updateTime } from "../utils/scripts";
import { VillageElder } from "../utils/documentTexts";
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
        <div className="document-container">
          <div className="document-preview">
            <DocumentPreview
              preview={VillageElder}
              text={VillageElder}
            ></DocumentPreview>
          </div>
        </div>
      </div>
    );
  }
}

export default Village;
