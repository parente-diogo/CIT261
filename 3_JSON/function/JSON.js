// STRINGIFY -----------------------------------------
function store() {
  var n1 = document.getElementById('name').value;
  var n2 = document.getElementById('surname').value;
  var n3 = document.getElementById('age').value;
  var n4 = document.getElementById('birth').value;

  var info1 = {"name": n1,"surname": n2,"age": n3,"birth": n4};
  var info2 = {n1,n2,n3,n4};
  var info3 = [n1, n2, n3, n4];

  localStorage.setItem("info1", info1);
  localStorage.setItem("info2", info2);
  localStorage.setItem("info3", info3);
}

function stringStore() {
  var n1 = document.getElementById('name').value;
  var n2 = document.getElementById('surname').value;
  var n3 = document.getElementById('age').value;
  var n4 = document.getElementById('birth').value;

  var info1 = {"name": n1,"surname": n2,"age": n3,"birth": n4};
  var info2 = {n1,n2,n3,n4};
  var info3 = [n1, n2, n3, n4];

  var stringNames1 = JSON.stringify(info1);
  localStorage.setItem("info1", stringNames1);
  var stringNames2 = JSON.stringify(info2);
  localStorage.setItem("info2", stringNames2);
  var stringNames3 = JSON.stringify(info3);
  localStorage.setItem("info3", stringNames3);
}

// PARSE ---------------------------------------------
function getNames() {
  var nomes1 = localStorage.getItem("info1");
  var nomes2 = localStorage.getItem("info2");
  var nomes3 = localStorage.getItem("info3");
  
  document.getElementById("data1").innerHTML = nomes1;
  document.getElementById("data2").innerHTML = nomes2;
  document.getElementById("data3").innerHTML = nomes3;
}

function parseNames() {
  document.getElementById("data1").innerHTML = "";
  document.getElementById("data2").innerHTML = "";
  document.getElementById("data3").innerHTML = "";

  var nomes1 = localStorage.getItem("info1");
  //var nomes2 = localStorage.getItem("info2");
  //var nomes3 = localStorage.getItem("info3");
  
  var parse1 = JSON.parse(nomes1);
  document.getElementById("data1").innerHTML = parse1;
  //var parse2 = JSON.parse(nomes2);
  //document.getElementById("data2").innerHTML = parse2;
  //var parse3 = JSON.parse(nomes3);
 // document.getElementById("data3").innerHTML = parse3;
}











/*
function tipo() {
  var tipo1 = typeof (returnNames1);
  var tipo2 = typeof (returnNames2);
  document.getElementById("return1").innerHTML = tipo1;
  document.getElementById("return2").innerHTML = tipo2;
}

function comprimento() {
  var tipo1 = returnNames1.length;
  var tipo2 = returnNames2.length;
  document.getElementById("return1").innerHTML = tipo1;
  document.getElementById("return2").innerHTML = tipo2;
}
*/