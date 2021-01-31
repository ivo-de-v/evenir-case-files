import React, { Component } from "react";
import CloseButton from "./CloseButton";
import { getDocumentsFromStorage, getDocumentTitle } from "../documentText";
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
      <div className="centred">
        <h1>My Documents</h1>
        <div>
          {this.state.documents.map((document) => (
            <DocumentPreview
              preview={document}
              text={document}
              key={getDocumentTitle(document)}
            ></DocumentPreview>
          ))}
        </div>

        <div>
          {this.props.location.pathname === "/mydocuments" ? (
            <CloseButton></CloseButton>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(MyDocuments);
