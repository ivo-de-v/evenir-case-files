import React, { Component } from "react";
import DocumentPreview from "./DocumentPreview";
import { updateHistory, updateTime } from "../utils/scripts";
import {
  KingdomOfEvenir,
  KingsOfEvenir,
  Letters,
} from "../utils/documentTexts";
import Footer from "./Footer";

class RoyalPalace extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7, false);
  }

  render() {
    return (
      <div className="place-grid">
        <div className="case-title">
          <h1 className="title">This is the Treasury Archive</h1>
          <p>It will take you 2 days to read the documents here</p>
        </div>

        <div className="place-documents">
          <div className="document-preview">
            <DocumentPreview
              preview={KingsOfEvenir}
              text={KingsOfEvenir}
            ></DocumentPreview>
          </div>
          <div className="document-preview">
            <DocumentPreview
              preview={KingdomOfEvenir}
              text={KingdomOfEvenir}
            ></DocumentPreview>
          </div>
          <div className="document-preview">
            <DocumentPreview preview={Letters} text={Letters}></DocumentPreview>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default RoyalPalace;
