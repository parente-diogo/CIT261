/* ANIMATIONS EVENTS ----------------------------*/
var x = document.getElementById("animation3");
/*var x2 = document.getElementById("animation2");
var x3 = document.getElementById("animation3");*/

/*x.addEventListener("webkitAnimationStart", funStart);
x.addEventListener("webkitAnimationEnd", funEnd);*/
x.addEventListener("webkitAnimationIteration", funRepeat);
/*
function funStart() {
  alert("The animation has just started.");
}

function funEnd() {
  alert("The animation has just finished.");
}
*/
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