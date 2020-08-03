// Main input from user
const userInput = document.getElementById("userInput");

// output contianers
const charCountLabel = document.getElementById("charCount");
const wordCountLabel = document.getElementById("wordCount");

//buttons
const clearBtn = document.getElementById("clear");
const selectBtn = document.getElementById("selectText");
const upercaseAllBtn = document.getElementById("upcaseAll");
const lowercaseAllbtn = document.getElementById("lowercaseAll");
//UserAction
function userAction() {
  charCountLabel.value = getCharCount(userInput.value);
  wordCountLabel.value = getWordCount(userInput.value);
}
//Listenrs

clearBtn.addEventListener("click", function () {
  userInput.value = "";
  charCountLabel.value = "";
  wordCountLabel.value = "";
});

selectBtn.addEventListener("click", () => {
  userInput.select();
});

upercaseAllBtn.addEventListener("click", () => {
  userInput.value = upperCaseAll(userInput.value);
});

lowercaseAllbtn.addEventListener("click", () => {
  userInput.value = lowerCaseAll(userInput.value);
});

//Functions
function getCharCount(input) {
  return input.length;
}
function getWordCount(input) {
  try {
    console.log(input.match(/\S+/g));
    return input.match(/\S+/g).length;
  } catch {
    return "0";
  }
}
function upperCaseAll(input) {
  input = input.toUpperCase();
  return input;
}
function lowerCaseAll(input) {
  input = input.toLowerCase();
  return input;
}
