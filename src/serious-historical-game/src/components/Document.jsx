import React from "react";
import DocumentText from "./DocumentText";

const Document = ({ handleClose, show, children, location }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let modalClassName = "";

  if (location === "/mydocuments") {
    modalClassName = "modal-main modal-mydocuments";
  } else if (location.includes("/places")) {
    modalClassName = "modal-main modal-mydocuments";
  } else {
    modalClassName = "modal-main mydocuments-mycase";
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
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Document;
