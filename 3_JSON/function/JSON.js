// STRINGIFY -----------------------------------------
function store() {
  var n1 = document.getElementById('name').value;
  var n2 = document.getElementById('surname').value;
  var n3 = document.getElementById('age').value;
  var n4 = document.getElementById('birth').value;

  var info1 = {"name":n1,"surname":n2,"age":n3,"birth":n4};
  var info2 = {n1,n2,n3,n4};
  var info3 = [n1,n2,n3,n4];

  localStorage.setItem("info1", info1);
  localStorage.setItem("info2", info2);
  localStorage.setItem("info3", info3);
}

function stringStore() {
  var n1 = document.getElementById('name').value;
  var n2 = document.getElementById('surname').value;
  var n3 = document.getElementById('age').value;
  var n4 = document.getElementById('birth').value;

  var info1 = {"name":n1,"surname":n2,"age":n3,"birth":n4};
  var info2 = {n1,n2,n3,n4};
  var info3 = [n1,n2,n3,n4];

  var stringNames1 = JSON.stringify(info1);
  var stringNames2 = JSON.stringify(info2);
  var stringNames3 = JSON.stringify(info3);

  localStorage.setItem("info1", stringNames1);
  localStorage.setItem("info2", stringNames2);
  localStorage.setItem("info3", stringNames3);
}

// PARSE ---------------------------------------------
function getNames() {
  clearAll();
  tableHead();

  var nomes1 = localStorage.getItem("info1");
  var nomes2 = localStorage.getItem("info2");
  var nomes3 = localStorage.getItem("info3");
  
  document.getElementById("data1").innerHTML = nomes1;
  document.getElementById("data2").innerHTML = nomes2;
  document.getElementById("data3").innerHTML = nomes3;
  
  document.getElementById("type1").innerHTML = typeof(nomes1);
  document.getElementById("type2").innerHTML = typeof(nomes2);
  document.getElementById("type3").innerHTML = typeof(nomes3);
  
  document.getElementById("leng1").innerHTML = nomes1.length;
  document.getElementById("leng2").innerHTML = nomes2.length;
  document.getElementById("leng3").innerHTML = nomes3.length;
  
  document.getElementById("name1").innerHTML = nomes1.name;  
  document.getElementById("name2").innerHTML = nomes2.n1;
  document.getElementById("name3").innerHTML = nomes3[0];
  
  document.getElementById("surname1").innerHTML = nomes1.surname;  
  document.getElementById("surname2").innerHTML = nomes2.n2;
  document.getElementById("surname3").innerHTML = nomes3[1];
  
  document.getElementById("age1").innerHTML = nomes1.age;  
  document.getElementById("age2").innerHTML = nomes2.n3;
  document.getElementById("age3").innerHTML = nomes3[2];
  
  document.getElementById("bday1").innerHTML = nomes1.birth;  
  document.getElementById("bday2").innerHTML = nomes2.n4;
  document.getElementById("bday3").innerHTML = nomes3[3];
}

function parseNames() {
  clearAll();
  tableHead();

  var item1 = localStorage.getItem("info1");
  var item2 = localStorage.getItem("info2");
  var item3 = localStorage.getItem("info3");
  
  var parse1 = JSON.parse(item1);
  var parse2 = JSON.parse(item2);
  var parse3 = JSON.parse(item3);

  document.getElementById("data1").innerHTML = parse1;
  document.getElementById("data2").innerHTML = parse2;
  document.getElementById("data3").innerHTML = parse3;
  
  document.getElementById("type1").innerHTML = typeof(parse1);
  document.getElementById("type2").innerHTML = typeof(parse2);
  document.getElementById("type3").innerHTML = typeof(parse3);
  
  document.getElementById("leng1").innerHTML = parse1.length;
  document.getElementById("leng2").innerHTML = parse2.length;
  document.getElementById("leng3").innerHTML = parse3.length;
  
  document.getElementById("name1").innerHTML = parse1.name;  
  document.getElementById("name2").innerHTML = parse2.n1;
  document.getElementById("name3").innerHTML = parse3[0];
  
  document.getElementById("surname1").innerHTML = parse1.surname;  
  document.getElementById("surname2").innerHTML = parse2.n2;
  document.getElementById("surname3").innerHTML = parse3[1];
  
  document.getElementById("age1").innerHTML = parse1.age;  
  document.getElementById("age2").innerHTML = parse2.n3;
  document.getElementById("age3").innerHTML = parse3[2];
  
  document.getElementById("bday1").innerHTML = parse1.birth;  
  document.getElementById("bday2").innerHTML = parse2.n4;
  document.getElementById("bday3").innerHTML = parse3[3];
}

function clearAll() {
  document.getElementById("data1").innerHTML = "";
  document.getElementById("data2").innerHTML = "";
  document.getElementById("data3").innerHTML = "";
  
  document.getElementById("type1").innerHTML = "";
  document.getElementById("type2").innerHTML = "";
  document.getElementById("type3").innerHTML = "";
  
  document.getElementById("leng1").innerHTML = "";
  document.getElementById("leng2").innerHTML = "";
  document.getElementById("leng3").innerHTML = "";
  
  document.getElementById("name1").innerHTML = "";
  document.getElementById("name2").innerHTML = "";
  document.getElementById("name3").innerHTML = "";
  
  document.getElementById("surname1").innerHTML = "";
  document.getElementById("surname2").innerHTML = "";
  document.getElementById("surname3").innerHTML = "";
  
  document.getElementById("age1").innerHTML = "";
  document.getElementById("age2").innerHTML = "";
  document.getElementById("age3").innerHTML = "";
  
  document.getElementById("bday1").innerHTML = "";
  document.getElementById("bday2").innerHTML = "";
  document.getElementById("bday3").innerHTML = "";
  
  document.getElementById("head1").innerHTML = "";
  document.getElementById("head2").innerHTML = "";
  document.getElementById("head3").innerHTML = "";
  document.getElementById("head4").innerHTML = "";
  document.getElementById("head5").innerHTML = "";
  document.getElementById("head6").innerHTML = "";
  document.getElementById("head7").innerHTML = "";
}

function tableHead() {
  document.getElementById("head1").innerHTML = "Data";
  document.getElementById("head2").innerHTML = "Type";
  document.getElementById("head3").innerHTML = "Length";
  document.getElementById("head4").innerHTML = "Name";
  document.getElementById("head5").innerHTML = "Surname";
  document.getElementById("head6").innerHTML = "Age";
  document.getElementById("head7").innerHTML = "Birthday";
}