import React, { Component } from "react";
import { getTime, updateHistory, updateTime } from "../utils/scripts";
import {
  KingdomOfEvenir,
  KingsOfEvenir,
  Letters,
} from "../utils/documentTexts";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";
import DocumentController from "./DocumentController";

class RoyalPalace extends Component {
  state = { time: getTime() };
  componentDidMount() {
    updateHistory();
    updateTime(7, false, this.props.history);
    this.setState({ time: getTime() });

    window.addEventListener("storage", (event) => {
      this.setState({ time: getTime() });
    });
  }

  render() {
    return (
      <div className="place-grid">
        <div className="case-title">
          <h1 className="title">This is the Royal Palace</h1>
          <p>It will take you 2 days to read the documents here</p>
        </div>

        <div className="place-documents">
          <DocumentController
            listOfDocuments={[KingdomOfEvenir, KingsOfEvenir, Letters]}
          ></DocumentController>
        </div>
        <div className="footer">
          <Footer time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default withRouter(RoyalPalace);
