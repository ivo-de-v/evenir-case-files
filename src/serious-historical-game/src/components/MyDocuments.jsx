import React, { Component } from "react";
import CloseButton from "./CloseButton";
import { getDocumentsFromStorage } from "../documentText";
import { withRouter } from "react-router-dom";
import DocumentPreview from "./DocumentPreview";

class MyDocuments extends Component {
  state = { documents: [] };

  componentDidMount() {
    const retreivedDocuments = getDocumentsFromStorage();
    this.setState({ documents: retreivedDocuments });
  }

  render() {
    return (
      <>
        <h1>My Documents</h1>
        <div>
          {this.state.documents.map((document) => (
            <DocumentPreview
              preview={document}
              text={document}
            ></DocumentPreview>
            /*<div key={getDocumentTitle(document)}>{readTextOnly(document)}</div>*/
          ))}
        </div>

        <div>
          {this.props.location.pathname === "/mydocuments" ? (
            <CloseButton></CloseButton>
          ) : null}
        </div>
      </>
    );
  }
}

export default withRouter(MyDocuments);
