import React, { Component } from "react";
import Document from "./Document";
import {
  getDocumentTitle,
  readTextOnly,
  saveTextObject,
  subtractReadingTime,
} from "../utils/scripts";
import { withRouter } from "react-router-dom";

class DocumentPreview extends Component {
  state = { show: false };

  showDocument = () => {
    this.setState({ show: true });
    subtractReadingTime(this.props.preview);
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
