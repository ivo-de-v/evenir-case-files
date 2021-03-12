import React from "react";
import {
  getDocumentTitle,
  getTime,
  saveTextObject,
  subtractReadingTime,
} from "../utils/scripts";
import { useHistory, withRouter } from "react-router-dom";

const DocumentPreview2 = ({
  document,
  hidePreview,
  showDocument,
  location,
}) => {
  const history = useHistory();
  const hidePreviewAndShowDocument = () => {
    hidePreview(false);
    showDocument(document);
    const remainingTime = getTime();

    // this prevents the player from going down to negative time by trying to read a document - reading any document takes 2 days
    if (remainingTime <= 1) {
      sessionStorage.setItem("timeUp", true);
      history.push("/mycase");
    } else if (location.pathname !== "/mycase") {
      subtractReadingTime(document);
      saveTextObject(document);
    }
  };
  return (
    <p className="document-preview-text" onClick={hidePreviewAndShowDocument}>
      {getDocumentTitle(document)}
    </p>
  );
};

export default withRouter(DocumentPreview2);
