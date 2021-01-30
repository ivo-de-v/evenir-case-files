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
  let arrayOfText = null;
  if (typeof textObject !== "number") {
    arrayOfText = textObject.filter((entry) => entry.text);
  }

  return arrayOfText;
}

export function getDocumentTitle(textObject) {
  let documentTitle = null;
  if (typeof textObject !== "number") {
    const titleValuePair = Object.values(textObject)[0];
    documentTitle = titleValuePair["title"];
  }

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

    if (key.charAt(0) !== "{" && key !== "time" && key !== "history") {
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

export function initialiseTime(remainingTime) {
  sessionStorage.setItem("time", remainingTime);
}

export function getTime() {
  const currentTime = sessionStorage.getItem("time");
  return currentTime;
}

export function updateTime(spentTime) {
  const previousTime = getTime();
  const remainingTime = previousTime - spentTime;
  const justVisited = checkPrevHistory();

  if (remainingTime <= 0) {
    window.location.replace("/mycase");
  } else if (justVisited === true) {
    return;
  } else {
    initialiseTime(remainingTime);
  }
}

export function initialiseHistory(array) {
  sessionStorage.setItem("history", JSON.stringify(array));
}

export function getHistoryAndCurrentUrl() {
  //console.log("test getitem", sessionStorage.getItem("history"));
  let historyArray = JSON.parse(sessionStorage.getItem("history"));
  //console.log("historyarray in gethistoryandcurrenturl", historyArray);
  const currentUrl = window.location.pathname;
  return [historyArray, currentUrl];
}

export function updateHistory() {
  let [historyArray, currentUrl] = getHistoryAndCurrentUrl();
  //console.log("historyarray in updatehistory", historyArray);
  historyArray.push(currentUrl);
  initialiseHistory(historyArray);
}

export function checkPrevHistory() {
  let [historyArray, currentUrl] = getHistoryAndCurrentUrl();
  let justVisited = false;

  if (historyArray[historyArray.length - 3] === currentUrl) {
    justVisited = true;
  }

  return justVisited;
}
