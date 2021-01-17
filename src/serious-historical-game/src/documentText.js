export let exampleText = [
  { title: "example text" },
  { text: "lorem ", score: 0 },
  { text: "ipsum ", score: 2 },
  { text: "dolor ", score: 4 },
  { text: "sit ", score: 0 },
  { text: "amet. ", score: 1 },
];

export let exampleVillageText = [
  { title: "talk to the village elder" },
  { text: "ahoy ", score: 0 },
  { text: "matey! ", score: 2 },
];

export const ItemTypes = {
  TEXT: "text",
  CARD: "card",
};

export function readTextOnly(textObject) {
  let arrayOfText = textObject.filter((entry) => entry.text);
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

export function getTextFromStorage() {
  var listofText = [];
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);

    if (key.charAt(0) === "{") {
      listofText.push(JSON.parse(key));
    }
  }
  return listofText;
}
