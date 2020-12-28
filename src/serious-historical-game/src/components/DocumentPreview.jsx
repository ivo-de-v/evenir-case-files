import React, { Component } from "react";
import Document from "./Document";
import {
  readTextOnly,
  returnDocumentTitle,
  saveTextObject,
} from "../documentText";

class DocumentPreview extends Component {
  state = { show: false };

  showDocument = () => {
    this.setState({ show: true });
    saveTextObject(this.props.text);
  };

  hideDocument = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        <div onClick={this.showDocument}>
          {returnDocumentTitle(this.props.preview)}
        </div>
        <Document
          show={this.state.show}
          handleClose={this.hideDocument}
          children={readTextOnly(this.props.text)}
        ></Document>
      </React.Fragment>
    );
  }
}

export default DocumentPreview;
