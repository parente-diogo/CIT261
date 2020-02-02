function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// CURRENT WEATHER ---------------------------------
// JOINVILLE //
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3459712&APPID=b285b20fa82efc1c3fed473c86303dd2";
// SÃO PAULO // const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3448439&APPID=b285b20fa82efc1c3fed473c86303dd2";
// NEW YORK // const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5128581&APPID=b285b20fa82efc1c3fed473c86303dd2";
// LONDON // const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=b285b20fa82efc1c3fed473c86303dd2";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.table(jsObject);

    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = Math.floor(jsObject.main.temp) - 273;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;
    document.getElementById('city').textContent = jsObject.name;
    document.getElementById('country').textContent = jsObject.sys.country;
  });