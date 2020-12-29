import React, { Component } from "react";
import CloseButton from "./CloseButton";
import MyDocuments from "./MyDocuments";

class MyCase extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>My Case</h1>
        <div className="mydocuments-case">
          <MyDocuments></MyDocuments>
        </div>
        <div>
          <CloseButton></CloseButton>
        </div>
      </>
    );
  }
}

export default MyCase;
