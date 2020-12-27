import React, { Component } from "react";
import CloseButton from "./CloseButton";

class MyDocuments extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Your document highlights</h1>
        <CloseButton></CloseButton>
      </React.Fragment>
    );
  }
}

export default MyDocuments;
