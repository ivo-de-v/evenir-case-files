import React, { Component } from "react";
import DocumentPreview from "./DocumentPreview";
import { updateHistory, updateTime } from "../utils/scripts";
import {
  KingdomOfEvenir,
  KingsOfEvenir,
  Letters,
} from "../utils/documentTexts";

class RoyalPalace extends Component {
  componentDidMount() {
    updateHistory();
    updateTime(7, false);
  }

  render() {
    return (
      <div className="centred">
        <h1 className="title">This is the Royal Palace</h1>
        <p>It will take you 2 days to read the documents here</p>
        <div className="document-container">
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
      </div>
    );
  }
}

export default RoyalPalace;
