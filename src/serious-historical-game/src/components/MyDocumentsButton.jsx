import React from "react";
import { Link } from "react-router-dom";

function MyDocumentsButton() {
  return (
    <Link to="/mydocuments" className="footer-link footer-link-documents">
      <div className="footer-link-text">Documents</div>
    </Link>
  );
}

export default MyDocumentsButton;
