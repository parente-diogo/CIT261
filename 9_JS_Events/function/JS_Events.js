/* ANIMATIONS EVENTS ----------------------------*/
var x1 = document.getElementById("animation1");
var x2 = document.getElementById("animation2");
var x3 = document.getElementById("animation3");
var count = 0;

x1.addEventListener("webkitAnimationStart", funStart);
x2.addEventListener("webkitAnimationEnd", funEnd);
x3.addEventListener("webkitAnimationIteration", funRepeat);

function funStart() {
  document.getElementById("out1").innerHTML = "start";
}

function funEnd() {
  document.getElementById("out2").innerHTML = "finish";
}

function funRepeat() {
  count = count + 1;
  document.getElementById("out3").innerHTML = "repeat " + count;
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