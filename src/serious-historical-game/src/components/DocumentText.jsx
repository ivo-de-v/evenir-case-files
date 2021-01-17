import React from "react";
import { ItemTypes } from "../documentText";
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

  if (location === "/mycase") {
    spanStyle = true;
  }

  return (
    <span
      ref={spanStyle ? drag : null}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
    >
      {text}
    </span>
  );
}

export default DocumentText;
