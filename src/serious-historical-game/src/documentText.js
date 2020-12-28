export let exampleText = [
  { title: "example text" },
  { text: "lorem" },
  { text: "ipsum" },
  { text: "dolor" },
  { text: "sit" },
  { text: "amet" },
];

export function readTextOnly(textObject) {
  let textFromObject = textObject.map((entry) => entry.text);
  return <>{textFromObject.join(" ")}</>;
}

export function returnDocumentTitle(textObject) {
  let textObjectTitle = textObject.map((entry) => entry.title);
  return <div>{textObjectTitle}</div>;
}

export function saveTextObject(textObject) {
  const jsonTextObject = JSON.stringify(textObject);
  sessionStorage.setItem("example text", jsonTextObject);
}
