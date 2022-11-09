var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("Error occured");
  alert("Something wrong with Server, try again after sometime");
}

function clickHandler() {
  //   outputDiv.innerText = "jsdgjsjgaksjd " + txtInput.value;

  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler);
