var mousePressed = false;
var lastX, lastY;
var ctx;

function InitThis() {
  ctx = document.getElementById('myCanvas').getContext("2d");

  $('#myCanvas').mousedown(function (e) {
    mousePressed = true;
    Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
  });

  $('#myCanvas').mousemove(function (e) {
    if (mousePressed) {
      Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
    }
  });

  $('#myCanvas').mouseup(function (e) {
    mousePressed = false;
  });
  $('#myCanvas').mouseleave(function (e) {
    mousePressed = false;
  });
}

function Draw(x, y, isDown) {
  if (isDown) {
    ctx.beginPath();
    ctx.strokeStyle = $('#selColor').val();
    ctx.lineWidth = $('#selWidth').val();
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }
  lastX = x;
  lastY = y;
}

function clearArea() {
  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function circle() {
  var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = document.getElementById("selColor").value;
ctx.lineWidth = document.getElementById("selWidth").value;
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
}

function rect() {
  var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = document.getElementById("selColor").value;
ctx.lineWidth = document.getElementById("selWidth").value;
ctx.rect(20, 20, 150, 100);
ctx.stroke();
}