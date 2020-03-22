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

