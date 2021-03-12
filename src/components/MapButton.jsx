import React from "react";
import { Link } from "react-router-dom";

function MapButton() {
  return (
    <Link to="/mapscreen" className="footer-link footer-link-map">
      <div className="footer-link-text">Map</div>
    </Link>
  );
}

export default MapButton;
