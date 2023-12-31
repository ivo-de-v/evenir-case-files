import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/documentTexts";
import DocumentText from "./DocumentText";

const CaseHeadingDropZone = ({ headingName, placeholder }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.TEXT,
    drop: (item, monitor) => testPut(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  function testPut(item) {
    let key = {
      text: item.text,
      heading: headingName,
      location: item.location,
      score: item.score,
    };
    sessionStorage.setItem(JSON.stringify(key), JSON.stringify(item));
  }

  function testGet() {
    let textArray = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);

      if (key.charAt(0) === "{") {
        const parsedKey = JSON.parse(key);
        textArray.push(parsedKey);
      }
    }
    return textArray;
  }

  function displayCorrectText(entry) {
    return entry.heading === headingName;
  }

  const isActive = canDrop && isOver;

  let backgroundColor = null;

  if (isActive) {
    backgroundColor = "#fbefd7";
  } else if (canDrop) {
    backgroundColor = "#93b4f4";
  }

  return (
    <>
      <div
        ref={drop}
        className="mycase-heading-box"
        style={{ backgroundColor }}
        data-placeholder={placeholder}
      >
        {testGet()
          .filter(displayCorrectText)
          .map((entry) => (
            <DocumentText
              key={Math.random()}
              text={entry.text}
              location={entry.location}
            />
          ))}
      </div>
    </>
  );
};

export default CaseHeadingDropZone;
