import React, { Component } from "react";
import Document from "./Document";
import {
  getDocumentTitle,
  getTime,
  readTextOnly,
  saveTextObject,
  subtractReadingTime,
} from "../utils/scripts";
import { withRouter } from "react-router-dom";

class DocumentPreview extends Component {
  state = { show: false };

  showDocument = () => {
    this.setState({ show: true });

    const remainingTime = getTime();

    // this prevents the player from going down to negative time by trying to read a document - reading any document takes 2 days
    if (remainingTime <= 1) {
      //window.dispatchEvent(new Event("timesUp"));
      sessionStorage.setItem("timeUp", true);
      this.props.history.push("/mycase");
    } else if (this.props.location.pathname !== "/mycase") {
      subtractReadingTime(this.props.preview);
      saveTextObject(this.props.text);
    }
  };

  hideDocument = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <p onClick={this.showDocument} className="document-preview-text">
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
