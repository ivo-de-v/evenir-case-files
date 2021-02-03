import React, { Component } from "react";
import {
  economicReports,
  economicReportsRegional,
  PopulationCensus,
  PopulationCensusRegional,
} from "../utils/documentTexts";
import { getTime, updateHistory, updateTime } from "../utils/scripts";
import DocumentPreview from "./DocumentPreview";
import Footer from "./Footer";

class TreasuryArchive extends Component {
  state = { time: getTime() };
  componentDidMount() {
    updateHistory();
    updateTime(7, false);
    this.setState({ time: getTime() });
  }
  render() {
    return (
      <div className="place-grid">
        <div className="case-title">
          <h1 className="title">This is the Treasury Archive</h1>
          <p>It will take you 2 days to read the documents here</p>
        </div>

        <div className="place-documents">
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
        <div className="footer">
          <Footer time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default TreasuryArchive;
