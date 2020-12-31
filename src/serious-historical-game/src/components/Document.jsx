import React from "react";

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
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default Document;
