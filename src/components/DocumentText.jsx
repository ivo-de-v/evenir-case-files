import React from "react";
import { ItemTypes } from "../utils/documentTexts";
import { useDrag } from "react-dnd";

function DocumentText({ text, location, score }) {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TEXT,
      text: text,
      location: location,
      score: score,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  let spanStyle = false;
  let spanClassName = "span-documents";

  if (location === "/mycase") {
    spanStyle = true;
    spanClassName = "span-mycase";
  }

  return (
    <span
      ref={spanStyle ? drag : null}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
      className={spanClassName}
    >
      {text}
    </span>
  );
}

export default DocumentText;
