import React, { Component } from "react";
import { updateHistory, updateTime } from "../documentText";

class TreasuryArchive extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7, false);
  }
  render() {
    return (
      <div className="centred">
        <h1>This is the Treasury Archive</h1>
        <p>It will take you 2 days to read the documents here</p>
      </div>
    );
  }
}

export default TreasuryArchive;
