// select major Element
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

//Length of input
function inputLength() {
  return input.value.length;
}

//create our TextNode and element
function createList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

//What happens After Click
function addListAfterClick() {
  if (inputLength() > 0) {
    createList();
  }
}

//What happens After i press Enter
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createList();
  }
}
//utilising the addEventListner for button
button.addEventListener("click", addListAfterClick);

//utilising the addEventListner for keypress
input.addEventListener("keypress", addListAfterKeyPress);
