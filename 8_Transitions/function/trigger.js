/* SPEED BEHAVIOR - TRANSITIONS -----------------*/
function changeColor() {
  const square = document.getElementById("example5");
  square.style.background = "orange";
}

function enlarge() {
  const square = document.getElementById("example5");
  square.style.width = "200px";
  square.style.height = "200px";
}

function shrink() {
  const square = document.getElementById("example5");
  square.style.width = "50px";
  square.style.height = "50px";
}

function fadeOut() {
  const square = document.getElementById("example5");
  square.style.opacity = "0";
}

function resetBox1() {
  const square = document.getElementById("example5");
  square.style.background = "blue";
  square.style.width = "100px";
  square.style.height = "100px";
  square.style.opacity = "1";
}

/* SPEED BEHAVIOR - TRANSITIONS -----------------*/
function moveRight() {
  const square = document.getElementById("example6");
  square.style.animation = "move1 2s alternate infinite ease-in-out";
}

function moveRing1() {
  const square = document.getElementById("example6");
  square.style.animation = "move2 4s infinite linear";
}