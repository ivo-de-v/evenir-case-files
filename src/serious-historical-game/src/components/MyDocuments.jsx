import React, { Component } from "react";
import CloseButton from "./CloseButton";
import {
  getDocumentsFromStorage,
  getDocumentTitle,
  readTextOnly,
} from "../documentText";

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
            <div key={getDocumentTitle(document)}>{readTextOnly(document)}</div>
          ))}
        </div>
        <CloseButton></CloseButton>
      </>
    );
  }
}

export default MyDocuments;
