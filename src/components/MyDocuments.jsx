import React, { Component } from "react";
import CloseButton from "./CloseButton";
import { getDocumentsFromStorage } from "../utils/scripts";
import { withRouter } from "react-router-dom";
import DocumentController from "./DocumentController";

class MyDocuments extends Component {
  state = { documents: [] };

  componentDidMount() {
    const retreivedDocuments = getDocumentsFromStorage();
    this.setState({ documents: retreivedDocuments });
    console.log("documents", this.state.documents);
  }

  render() {
    return (
      <div className="mydocuments-grid">
        <div className="case-title">
          <h1>My Documents</h1>
          <p>Read documents used to build your Case</p>
        </div>
        <div className="mydocuments-documents">
          <DocumentController
            listOfDocuments={this.state.documents}
          ></DocumentController>
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
