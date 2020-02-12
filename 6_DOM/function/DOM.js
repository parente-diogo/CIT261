// CREATE ELEMENT ------------------------------------ //
function buttonCreate() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "New button";
  document.getElementById("space1").appendChild(btn);
}

function textCreate() {
  var text = document.getElementById("inputBox").value;
  var parag = document.createElement("p");
  parag.innerHTML = text;
  document.getElementById("space1").appendChild(parag);
}