import React, { Component } from "react";
import { getTime, updateHistory, updateTime } from "../utils/scripts";
import { VillageElder } from "../utils/documentTexts";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";
import DocumentController from "./DocumentController";

class Village extends Component {
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
          <h1> This is Callisto's Village</h1>
          <p>It will take you 2 days to read the documents here</p>
        </div>

        <div className="place-documents">
          <div className="document-preview">
            <DocumentController
              listOfDocuments={[VillageElder]}
            ></DocumentController>
          </div>
        </div>

        <div className="footer">
          <Footer time={this.state.time} />
        </div>
      </div>
    );
  }
}

export default withRouter(Village);
