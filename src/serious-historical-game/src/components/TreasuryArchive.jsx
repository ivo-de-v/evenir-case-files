import React, { Component } from "react";
import MapButton from "./MapButton";
import MyDocumentsButton from "./MyDocumentsButton";

class TreasuryArchive extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>This is the Treasury Archive</h1>
        <MapButton></MapButton>
        <MyDocumentsButton></MyDocumentsButton>
      </React.Fragment>
    );
  }
}

export default TreasuryArchive;
