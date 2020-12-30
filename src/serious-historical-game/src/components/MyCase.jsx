import React, { Component } from "react";
import CloseButton from "./CloseButton";
import MyDocuments from "./MyDocuments";

class MyCase extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>My Case</h1>
        <h3>case question</h3>
        <div className="mydocuments-mycase">
          <MyDocuments></MyDocuments>
        </div>
        <div className="headings-mycase">
          <h4>Challenge</h4>
          <h4>Defend</h4>
          <h4>Focus</h4>
          <button>Present your case</button>
        </div>
        <div className="closebutton-mycase">
          <CloseButton></CloseButton>
        </div>
      </>
    );
  }
}

export default MyCase;
