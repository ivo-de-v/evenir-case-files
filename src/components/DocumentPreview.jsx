import React, { Component } from "react";
import Document from "./Document";
import {
  getDocumentsFromStorage,
  getDocumentTitle,
  readTextOnly,
  saveTextObject,
} from "../utils/scripts";
import { withRouter } from "react-router-dom";
import { updateTime } from "../utils/scripts";

class DocumentPreview extends Component {
  state = { show: false };

  showDocument = () => {
    this.setState({ show: true });
    const documentTitle = getDocumentTitle(this.props.preview);
    console.log("documenttitle", documentTitle);
    const testArray = getDocumentsFromStorage();
    console.log("testarray", testArray);

    let found = undefined;
    for (let i = 0; i < testArray.length; i++) {
      found = testArray[i].find((element) => {
        return element.title === documentTitle;
      });
      console.log("found in loop", found);
    }

    if (typeof found === "undefined") {
      console.log("found", found);
      updateTime(2, true);
      window.dispatchEvent(new Event("storage"));
    }
    saveTextObject(this.props.text);
  };

  hideDocument = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <p onClick={this.showDocument}>
          {getDocumentTitle(this.props.preview)}
        </p>
        <Document
          show={this.state.show}
          handleClose={this.hideDocument}
          children={readTextOnly(this.props.text)}
          location={this.props.location.pathname}
        ></Document>
      </>
    );
  }
}

export default withRouter(DocumentPreview);
