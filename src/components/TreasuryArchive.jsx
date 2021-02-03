import React, { Component } from "react";
import {
  economicReports,
  economicReportsRegional,
  PopulationCensus,
  PopulationCensusRegional,
} from "../utils/documentTexts";
import { updateHistory, updateTime } from "../utils/scripts";
import DocumentPreview from "./DocumentPreview";

class TreasuryArchive extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7, false);
  }
  render() {
    return (
      <div className="centred">
        <h1 className="title">This is the Treasury Archive</h1>
        <p>It will take you 2 days to read the documents here</p>
        <div className="document-container">
          <div className="document-preview">
            <DocumentPreview
              preview={economicReports}
              text={economicReports}
            ></DocumentPreview>
          </div>
          <div className="document-preview">
            <DocumentPreview
              preview={economicReportsRegional}
              text={economicReportsRegional}
            ></DocumentPreview>
          </div>
          <div className="document-preview">
            <DocumentPreview
              preview={PopulationCensus}
              text={PopulationCensus}
            ></DocumentPreview>
          </div>
          <div className="document-preview">
            <DocumentPreview
              preview={PopulationCensusRegional}
              text={PopulationCensusRegional}
            ></DocumentPreview>
          </div>
        </div>
      </div>
    );
  }
}

export default TreasuryArchive;
