import React, { Component } from "react";
import CaseHeadingDropZone from "./CaseHeadingDropZone";

class CaseHeading extends Component {
  render() {
    return (
      <>
        <h4>{this.props.headingName}</h4>
        <CaseHeadingDropZone
          headingName={this.props.headingName}
        ></CaseHeadingDropZone>
      </>
    );
  }
}

export default CaseHeading;
