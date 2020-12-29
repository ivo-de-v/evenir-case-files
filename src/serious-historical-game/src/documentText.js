export let exampleText = [
  { title: "example text" },
  { text: "lorem" },
  { text: "ipsum" },
  { text: "dolor" },
  { text: "sit" },
  { text: "amet" },
];

export let exampleVillageText = [
  { title: "talk to the village elder" },
  { text: "ahoy" },
  { text: "matey" },
];

export function readTextOnly(textObject) {
  let textFromObject = textObject.map((entry) => entry.text);
  return <>{textFromObject.join(" ")}</>;
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
    const savedDocument = JSON.parse(sessionStorage.getItem(key));

    listofDocuments.push(savedDocument);
    console.log(listofDocuments);
  }
  return listofDocuments;
}
