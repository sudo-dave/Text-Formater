// Main input from user
const userInput = document.getElementById("userInput");

// output contianers
const charCountLabel = document.getElementById("charCount");
const wordCountLabel = document.getElementById("wordCount");

//buttons
const clearBtn = document.getElementById("clear");
const selectBtn = document.getElementById("selectText");

function userAction() {
  charCountLabel.value = getCharCount(userInput.value);
  wordCountLabel.value = getWordCount(userInput.value);
}

clearBtn.addEventListener("click", function () {
  userInput.value = "";
  charCountLabel.value = "";
  wordCountLabel.value = "";
});

selectBtn.addEventListener("click", function () {
  userInput.select();
});

function getCharCount(input) {
  return input.length;
}
function getWordCount(input) {
  try {
    return input.match(/\S+/g).length;
  } catch {
    return "0";
  }
}
