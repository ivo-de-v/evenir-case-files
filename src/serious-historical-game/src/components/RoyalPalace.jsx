import React, { Component } from "react";
import DocumentPreview from "./DocumentPreview";
import MapButton from "./MapButton";

class RoyalPalace extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>This is the Royal Palace</h1>
        <DocumentPreview
          text={<p>Lorem ipsum dolor sit amet</p>}
        ></DocumentPreview>
        <MapButton></MapButton>
      </React.Fragment>
    );
  }
}

export default RoyalPalace;
