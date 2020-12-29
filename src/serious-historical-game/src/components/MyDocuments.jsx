import React, { Component } from "react";
import CloseButton from "./CloseButton";
import { readTextFromStorage } from "../documentText";

class MyDocuments extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Your document highlights</h1>
        <div>{readTextFromStorage()}</div>
        <CloseButton></CloseButton>
      </React.Fragment>
    );
  }
}

export default MyDocuments;
