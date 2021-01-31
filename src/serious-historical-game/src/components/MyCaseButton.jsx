import React from "react";
import { Link } from "react-router-dom";

function MyCaseButton() {
  return (
    <Link to="/mycase" className="footer-link footer-link-case">
      <div className="footer-link-text footer-link-text-case">Case</div>
    </Link>
  );
}

export default MyCaseButton;
