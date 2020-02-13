// CREATE AND APPEND --------------------------------- //
function buttonCreate() {
  var btn = document.createElement("button");
  btn.innerHTML = "New button";
  document.getElementById("space1").appendChild(btn);
}

function textCreate() {
  var text = document.getElementById("inputBox").value;
  var parag = document.createElement("p");
  parag.innerHTML = text;
  document.getElementById("space1").appendChild(parag);
}

// INSERT -------------------------------------------- //
function textInsert() {
  var inputText = document.getElementById("inputBox2").value;
  var inputPlace = document.getElementById("inputIndex").value;
  var space = document.getElementById("space2");

  var newPar = document.createElement("p");
  var text = document.createTextNode(inputText);
  newPar.appendChild(text);
  space.insertBefore(newPar, space.childNodes[inputPlace]);
}

// REMOVE -------------------------------------------- //
function textRemove() {
  var removePlace = document.getElementById("removeIndex").value;
  var space = document.getElementById("space2");
  space.removeChild(space.childNodes[removePlace]);
}

// REPLACE ------------------------------------------- //
function textReplace() {
  var inputText3 = document.getElementById("inputBox3").value;
  var inputReplace = document.getElementById("replaceIndex").value;

  var repPar = document.getElementById("space2").childNodes[inputReplace];
  repPar.replaceChild(inputText3, repPar.childNodes[inputReplace]);
}