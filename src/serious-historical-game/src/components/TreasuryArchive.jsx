import React, { Component } from "react";
import { updateHistory, updateTime } from "../documentText";

class TreasuryArchive extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7);
  }
  render() {
    return (
      <>
        <h1>This is the Treasury Archive</h1>
        <p>It will take you 2 days to read the documents here</p>
      </>
    );
  }
}

export default TreasuryArchive;
