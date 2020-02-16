// ID ELEMENTS -------------------------------------
function idChange1() {
  document.getElementById('texto2').style.background = "pink";
}

function idChange2() {
  document.getElementById('texto2').style.background = "purple";
}

function idChange3() {
  document.getElementById('texto2').style.background = "black";
}

// CLASS ELEMENTS ----------------------------------
function classChange1() {
  var x = document.getElementsByClassName('texto1');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = 'red';
    x[i].style.background = "yellow";
  }
}

function classChange2() {
  var x = document.getElementsByClassName('texto1');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = 'green';
    x[i].style.background = "orange";
  }
}

function classChange3() {
  var x = document.getElementsByClassName('texto1');
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.color = 'blue';
    x[i].style.background = "pink";
  }
}