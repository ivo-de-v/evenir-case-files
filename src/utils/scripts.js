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

export function updateTime(spentTime, documentFlag, history) {
  const previousTime = getTime();
  const remainingTime = previousTime - spentTime;
  const justVisited = checkPrevHistory();

  if (remainingTime < 0) {
    history.push("/mycase");
  } else if (justVisited === true && documentFlag === false) {
    return;
  } else {
    initialiseTime(remainingTime);
  }
}

export function initialiseHistory(array) {
  sessionStorage.setItem("history", JSON.stringify(array));
}

export function getHistoryAndCurrentUrl() {
  let historyArray = JSON.parse(sessionStorage.getItem("history"));
  const currentUrl = window.location.pathname;
  return [historyArray, currentUrl];
}

export function updateHistory() {
  let [historyArray, currentUrl] = getHistoryAndCurrentUrl();
  historyArray.push(currentUrl);
  initialiseHistory(historyArray);
}

export function checkPrevHistory() {
  let [historyArray, currentUrl] = getHistoryAndCurrentUrl();
  let justVisited = false;

  //if this is the first place you click on in the game, then you've not just visited it
  if (historyArray.length === 1) {
    justVisited = false;
    // if you were already there and you click back from a menu page, then don't subtract time
  } else if (historyArray[historyArray.length - 2] === currentUrl) {
    justVisited = true;
  }

  return justVisited;
}

export function subtractReadingTime(title) {
  const documentTitle = getDocumentTitle(title);
  const documents = getDocumentsFromStorage();

  let found = undefined;
  for (let i = 0; i < documents.length; i++) {
    /*this iterates through the array and checks each document's title to see if it matches with the one that's currently 
    being read. if it finds one, it breaks out of the foor loop, otherwise it would move onto the next, not find it, and set
    found to undefined as a result, which is not what we want*/
    found = documents[i].find((element) => {
      return element.title === documentTitle;
    });
    if (typeof found !== "undefined") {
      break;
    }
  }

  if (typeof found === "undefined") {
    updateTime(2, true);
    window.dispatchEvent(new Event("storage"));
  }
}

export function calculateScore(headings, sliderValue) {
  const snippets = getTextFromStorage();
  const headingList = [];
  headingList.push(headings);
  console.log("sliderValue", sliderValue);

  let totalScore = 0;
  for (let i = 0; i < snippets.length; i++) {
    totalScore += snippets[i].score;
  }

  if (sliderValue === 0) {
    totalScore += +1;
  } else if (sliderValue === 1) {
    totalScore += 2;
  } else if (sliderValue === 2) {
    totalScore += 0;
  } else if (sliderValue === 3) {
    totalScore += -1;
  } else {
    totalScore += -2;
  }
  return totalScore;
}

export function storeSliderValue(value) {
  sessionStorage.setItem("slider", JSON.stringify(value));
}

export function getSliderValue() {
  const sliderValue = JSON.parse(sessionStorage.getItem("slider"));
  return sliderValue;
}
