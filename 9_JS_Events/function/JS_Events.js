/* TOUCH EVENTS ---------------------------------*/
function funOnTouchStart() {
  alert("You just touched the button.");
}

function funOnEnd() {
  alert("You released the button.");
}

function funOnCancel() {
  alert("Something interrupted you pushing the button.");
}

function moving(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById("position").innerHTML = x + ", " + y;
}

/* ANIMATIONS EVENTS ----------------------------*/
var x1 = document.getElementById("animation1");
var x2 = document.getElementById("animation2");
var x3 = document.getElementById("animation3");
var count = 0;

x1.addEventListener("webkitAnimationStart", funStart);
x2.addEventListener("webkitAnimationEnd", funEnd);
x3.addEventListener("webkitAnimationIteration", funRepeat);

function funStart() {
  document.getElementById("out1").innerHTML = "Started";
}

function funEnd() {
  document.getElementById("out2").innerHTML = "Finished";
}

function funRepeat() {
  count = count + 1;
  document.getElementById("out3").innerHTML = "Repeated " + count + " times";
}

/* TRANSITION EVENTS ----------------------------*/
var x4 = document.getElementById("transition1");
var count2 = 0;
x4.addEventListener("webkitTransitionEnd", funEndTransition);

function funEndTransition() {
  count2 = count2 + 1;
  document.getElementById("out4").innerHTML = "Finished " + count2 + " times";
}

/* HTML EVENTS ----------------------------------*/
function funOnClick() {
  alert("You clicked the button using the mouse.");
}