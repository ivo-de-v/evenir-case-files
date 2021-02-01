import React from "react";
import { withRouter } from "react-router-dom";

const CloseButton = ({ history }) => (
  <button onClick={() => history.goBack()}>Close</button>
);

export default withRouter(CloseButton);
