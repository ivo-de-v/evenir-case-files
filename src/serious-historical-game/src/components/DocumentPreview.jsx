import React, { Component } from "react";
import Document from "./Document";

class DocumentPreview extends Component {
  state = { show: false };

  showDocument = () => {
    this.setState({ show: true });
  };

  hideDocument = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <React.Fragment>
        <p onClick={this.showDocument}>example text</p>
        <Document
          show={this.state.show}
          handleClose={this.hideDocument}
          children={this.props.text}
        ></Document>
      </React.Fragment>
    );
  }
}

export default DocumentPreview;
