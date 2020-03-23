// FOR Loop ------------------------------------------
function forLoop() {
  var start = parseInt(document.getElementById('first').value);
  var rounds = parseInt(document.getElementById('turns').value);
  var steps = parseInt(document.getElementById('pace').value);
  var output = "";
  var contagem = start;

  for (i = start; i < start + rounds; i++) {
    output = output + contagem + "</br>";
    contagem += steps;
  }

  document.getElementById("outForLoop").innerHTML = output;
}

// WHILE Loop ----------------------------------------
function whileLoop() {
  var start = parseInt(document.getElementById('first2').value);
  var ending = parseInt(document.getElementById('last').value);
  var steps = parseInt(document.getElementById('pace2').value);
  var output = "";
  var contagem = start;

  while (contagem <= ending) {
    output = output + contagem + "</br>";
    contagem += steps;
  }

  document.getElementById("outWhileLoop").innerHTML = output;
}

// DO WHILE Loop ----------------------------------------
function doWhileLoop() {
  var start = parseInt(document.getElementById('first2').value);
  var ending = parseInt(document.getElementById('last').value);
  var steps = parseInt(document.getElementById('pace2').value);
  var output = "";
  var contagem = start;

   do {
    output = output + contagem + "</br>";
    contagem += steps;
  } while (contagem <= ending)

  document.getElementById("outDoWhileLoop").innerHTML = output;
}

// IF / ELSE IF / ELSE ----------------------------------
function statements1() {  // IF-IF
  var value1 = parseInt(document.getElementById('1val1').value);
  var value2 = parseInt(document.getElementById('1val2').value);
  var value3 = parseInt(document.getElementById('1val3').value);
  var value4 = parseInt(document.getElementById('1val4').value);
  var result1 = "FALSE";
  var result2 = "FALSE";

  if (value1 > value2) {
    result1 = "TRUE";
  }
  if (value3 > value4) {
    result2 = "TRUE";
  }

  document.getElementById("1result1").innerHTML = result1;
  document.getElementById("1result2").innerHTML = result2;
}

function statements2() {  // IF-ELSE IF
  var value1 = parseInt(document.getElementById('2val1').value);
  var value2 = parseInt(document.getElementById('2val2').value);
  var value3 = parseInt(document.getElementById('2val3').value);
  var value4 = parseInt(document.getElementById('2val4').value);
  var result1 = "FALSE";
  var result2 = "FALSE";

  if (value1 > value2) {
    result1 = "TRUE";
  }
  else if (value3 > value4) {
    result2 = "TRUE";
  }

  document.getElementById("2result1").innerHTML = result1;
  document.getElementById("2result2").innerHTML = result2;
}

function statements3() {  // IF-ELSE
  var value1 = parseInt(document.getElementById('3val1').value);
  var value2 = parseInt(document.getElementById('3val2').value);
  var result1 = "FALSE";
  var result2 = "FALSE";

  if (value1 > value2) {
    result1 = "TRUE";
  }
  else {
    result2 = "TRUE";
  }

  document.getElementById("3result1").innerHTML = result1;
  document.getElementById("3result2").innerHTML = result2;
}