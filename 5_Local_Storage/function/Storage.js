// VERIFY SUPPORT FOR STORAGE FUNCTIONS --------------------------------------------- //
function support() {  //Check whether the browser support Storage Functions
  if (typeof(Storage) !== "undefined") {
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
