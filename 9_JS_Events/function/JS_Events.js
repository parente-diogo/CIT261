let x1 = document.getElementById("animation1");
let x2 = document.getElementById("animation2");
let x3 = document.getElementById("animation3");

x1.addEventListener("webkitAnimationStart", funStart);
x2.addEventListener("webkitAnimationEnd", funEnd);
x3.addEventListener("webkitAnimationIteration", funRepeat);

function funStart() {
  alert("The animation has just started.");
}

function funEnd() {
  alert("The animation has just finished.");
}

function funRepeat() {
  alert("The animation is repeating.");
}









function funOnClick() {
  alert("You clicked the button using the mouse.");
}

function funOnTouchStart() {
  alert("You just touched the button.");
}

function funOnEnd() {
  alert("You released the button.");
}

function funOnCancel() {
  alert("Something interrupted you pushing the button.");
}