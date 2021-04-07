import React from "react";
import DocumentText from "./DocumentText";

const Document = ({ text, hidePreview }) => {
  return (
    <>
      <div className="document-main">
        <p>
          {text.map((entry) => (
            <DocumentText
              text={entry.text}
              key={Math.random()}
              score={entry.score}
            ></DocumentText>
          ))}
        </p>
        <div>
          <button onClick={() => hidePreview(true)}>close</button>
        </div>
      </div>
    </>
  );
};

export default Document;
