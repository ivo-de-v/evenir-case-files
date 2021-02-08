import React, { Component } from "react";
import CloseButton from "./CloseButton";
import { getDocumentsFromStorage, getDocumentTitle } from "../utils/scripts";
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
      <div className="mydocuments-grid">
        <div className="case-title">
          <h1>My Documents</h1>
          <p>Read documents used to build your Case</p>
        </div>
        <div className="mydocuments-documents">
          {this.state.documents.map((document) => (
            <DocumentPreview
              preview={document}
              text={document}
              key={getDocumentTitle(document)}
            ></DocumentPreview>
          ))}
        </div>

        <div className="mydocuments-close">
          {this.props.location.pathname === "/mydocuments" ? (
            <CloseButton></CloseButton>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(MyDocuments);
