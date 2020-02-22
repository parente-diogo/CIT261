// STRINGIFY -----------------------------------------
function store() {
  var n1 = document.getElementById('name').value;
  var n2 = document.getElementById('surname').value;
  var n3 = document.getElementById('age').value;
  var n4 = document.getElementById('birth').value;
  
  var info1 = {"name":n1,"surname":n2,"age":n3,"birth":n4};
  var info2 = [n1, n2, n3, n4];

//localStorage.setItem("names1",names1);
localStorage.setItem("names2",names2);
}

function stringStore() {
  var n1 = document.getElementById('name1').value;
  var n2 = document.getElementById('name2').value;
  var n3 = document.getElementById('name3').value;
  var n4 = document.getElementById('name4').value;
  var n5 = document.getElementById('name5').value;
  /*var names1 = {
    name1: n1,
    name2: n2,
    name3: n3,
    name4: n4,
    name5: n5
  };*/
  var names2 = [n1, n2, n3, n4, n5];
  //var stringNames1 = JSON.stringify(names1);
  var stringNames2 = JSON.stringify(names2);

  //localStorage.setItem("names1",stringNames1);
  localStorage.setItem("names2",stringNames2);
}

// PARSE ---------------------------------------------
function getNames() {
  //var nomes1 = localStorage.getItem("names1");
  var nomes2 = localStorage.getItem("names2");
 // var tipo1 = typeof(nomes1);
  var tipo2 = typeof(nomes2);
 // var tamanho1 = nomes1.length;
  var tamanho2 = nomes2.length;
//document.getElementById("returnNames1").innerHTML = nomes1;
document.getElementById("returnNames2").innerHTML = nomes2;
//document.getElementById("type1").innerHTML = tipo1;
document.getElementById("type2").innerHTML = tipo2;
//document.getElementById("length1").innerHTML = tamanho1;
document.getElementById("length2").innerHTML = tamanho2;
}

function parseNames() {
  //var nome1 = localStorage.getItem("names1");
  var nome2 = localStorage.getItem("names2");
  //var nomes1 = JSON.parse(nome1);
  var nomes2 = JSON.parse(nome2);
  //var tipo1 = typeof(nomes1);
  var tipo2 = typeof(nomes2);
  //var tamanho1 = nomes1.length;
  var tamanho2 = nomes2.length;
  //document.getElementById("returnNames1").innerHTML = nomes1;
  document.getElementById("returnNames2").innerHTML = nomes2;
  //document.getElementById("type1").innerHTML = tipo1;
  document.getElementById("type2").innerHTML = tipo2;
  //document.getElementById("length1").innerHTML = tamanho1;
  document.getElementById("length2").innerHTML = tamanho2;



}












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