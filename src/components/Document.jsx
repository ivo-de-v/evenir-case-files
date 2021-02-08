import React from "react";
import DocumentText from "./DocumentText";

const Document = ({ handleClose, show, children, location }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let modalClassName = "modal-main modal-mydocuments";

  if (location === "/mycase") {
    modalClassName = "modal-main modal-mycase";
  }

  return (
    <div className={showHideClassName}>
      <section className={modalClassName}>
        <p>
          {children.map((entry) => (
            <DocumentText
              text={entry.text}
              key={Math.random() /* i'll think of something better later*/}
              location={location}
              score={entry.score}
            ></DocumentText>
          ))}
        </p>
        <button onClick={handleClose} className="document-closebutton">
          close
        </button>
      </section>
    </div>
  );
};

export default Document;
