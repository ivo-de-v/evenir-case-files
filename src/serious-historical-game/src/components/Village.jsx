import React, { Component } from "react";
import MapButton from "./MapButton";
import MyDocumentsButton from "./MyDocumentsButton";

class Village extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> This is Callisto's Village</h1>
        <MapButton></MapButton>
        <MyDocumentsButton></MyDocumentsButton>
      </React.Fragment>
    );
  }
}

export default Village;
