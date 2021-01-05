export let exampleText = [
  { title: "example text" },
  { text: "lorem " },
  { text: "ipsum " },
  { text: "dolor " },
  { text: "sit " },
  { text: "amet. " },
];

export let exampleVillageText = [
  { title: "talk to the village elder" },
  { text: "ahoy " },
  { text: "matey! " },
];

export const ItemTypes = {
  TEXT: "text",
};

export function readTextOnly(textObject) {
  let arrayOfText = textObject.filter((entry) => entry.text);
  console.trace();
  return arrayOfText;
}

export function getDocumentTitle(textObject) {
  const titleValuePair = Object.values(textObject)[0];
  const documentTitle = titleValuePair["title"];

  return documentTitle;
}

export function saveTextObject(textObject) {
  const jsonTextObject = JSON.stringify(textObject);
  const textObjectKey = getDocumentTitle(textObject);
  sessionStorage.setItem(textObjectKey, jsonTextObject);
}

export function getDocumentsFromStorage() {
  var listofDocuments = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key.charAt(0) !== "{") {
      const savedDocument = JSON.parse(sessionStorage.getItem(key));

      listofDocuments.push(savedDocument);
    }
  }
  return listofDocuments;
}
