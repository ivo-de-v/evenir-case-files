import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { cutsceneText1, cutsceneText2 } from "../utils/documentTexts";
import { initialiseHistory, initialiseTime } from "../utils/scripts";

class Cutscene extends Component {
  state = { text: cutsceneText1 };
  componentDidMount() {
    initialiseTime(30);
    initialiseHistory([]);
  }

  updateButton() {
    if (this.state.text.number === 1) {
      this.setState({ text: cutsceneText2 });
    } else {
      this.props.history.push("/mapscreen");
    }
  }
  render() {
    return (
      <div className="cutscene-grid">
        <p className="cutscene-text">{this.state.text.text}</p>
        <button
          onClick={this.updateButton.bind(this)}
          className="cutscene-button"
        >
          Next
        </button>
      </div>
    );
  }
}

export default withRouter(Cutscene);
