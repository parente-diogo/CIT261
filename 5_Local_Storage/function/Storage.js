// VERIFY SUPPORT FOR STORAGE FUNCTIONS --------------------------------------------- //
function support() { //Check whether the browser support Storage Functions
  if (typeof (Storage) !== "undefined") {
    alert("Your browser support Storage Functions.");
  } else {
    alert("Your browser does NOT support Storage Functions.\nPlease update your browser.");
  }
}

// STORE LOCALLY SOME DATA ---------------------------------------------------------- //
function storeLocal() {
  localStorage.setItem("testLocal", "This will remain after closing the browser");
}

function recoverLocal() {
  var value = " ";
  value = localStorage.getItem("testLocal");
  alert(value);
}

function eraseLocal() {
  localStorage.removeItem("testLocal");
}

function clearLocal() {
  localStorage.clear();
}

// STORE SOME DATA FOR THIS SESSION ------------------------------------------------- //
function storeSession() {
  sessionStorage.setItem("testSession", "This will expired when closing the tab.");
}

function recoverSession() {
  var value = " ";
  value = sessionStorage.getItem("testSession");
  alert(value);
}

function eraseSession() {
  sessionStorage.removeItem("testSession");
}

function clearSession() {
  sessionStorage.clear();
}

// WORKING WITH ARRAYS -------------------------------------------------------------- //
function storeArray() {
  var fruits = ["Apple", "Orange", "Strawberry", "Grapes", "Pineapple"];
  localStorage.setItem("my fruits", fruits);
}

function storeArray2() {
  var fruits = ["Apple", "Orange", "Strawberry", "Grapes", "Pineapple"];
  localStorage.setItem("same fruits", JSON.stringify(fruits));
}

function getArray() {
  var fruits = localStorage.getItem("my fruits");
  alert(fruits);
  alert(typeof (fruits));
  alert(fruits.length);
}

function getArray2() {
  var fruits = localStorage.getItem("same fruits");
  var fruits2 = JSON.parse(fruits);
  alert(fruits2);
  alert(typeof (fruits2));
  alert(fruits2.length);
}