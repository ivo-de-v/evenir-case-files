import React, { useState } from "react";
import DocumentPreview from "./DocumentPreview";
import Document from "./Document";

const DocumentController = ({ listOfDocuments }) => {
  console.log("listofdocuments", listOfDocuments);
  const [preview, hidePreview] = useState(true);
  const [document, showDocument] = useState(listOfDocuments[0]);

  let toRender;

  if (preview) {
    toRender = listOfDocuments.map((entry) => (
      <DocumentPreview
        document={entry}
        hidePreview={hidePreview}
        showDocument={showDocument}
        key={Math.random()}
      ></DocumentPreview>
    ));
  } else {
    toRender = <Document text={document} hidePreview={hidePreview}></Document>;
  }
  return toRender;
};

export default DocumentController;
