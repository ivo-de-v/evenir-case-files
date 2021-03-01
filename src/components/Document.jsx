import React from "react";
import DocumentText from "./DocumentText";

const Document = ({ text, hidePreview }) => {
  return (
    <>
      <p className="document-main">
        {text.map((entry) => (
          <DocumentText
            text={entry.text}
            key={Math.random() /* i'll think of something better later*/}
            score={entry.score}
          ></DocumentText>
        ))}
        <div>
          <button onClick={() => hidePreview(true)}>close</button>
        </div>
      </p>
    </>
  );
};

export default Document;
