// Main input from user
const userInput = document.getElementById("userInput");

// output contianers
const charCountLabel = document.getElementById("charCount");
const wordCountLabel = document.getElementById("wordCount");

//buttons
const clearBtn = document.getElementById("clear");
const selectBtn = document.getElementById("selectText");
const upercaseAll = document.getElementById("upcaseAll");

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

upercaseAll.addEventListener("click", function () {
  var inputUpper = userInput.value;
  inputUpper = inputUpper.toUpperCase();

  userInput.value = inputUpper;
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
// function upperCase(input) {
//   return input.value;
// }
