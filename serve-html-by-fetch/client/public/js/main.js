
/*var header = {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        }
    }

var url = "https://google.com/"

fetch(url, {
        mode: "no-cors"
    })
    .then(res => res.text())
    .then(body => console.log(body));
*/

function getTestData() {
    fetch('http://localhost:8080/api/test')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    document.getElementById("test-data").innerHTML = JSON.stringify(myJson);
  });
}

function getHtml() {
    fetch('http://localhost:8080/api/html/div')
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById("test-data").innerHTML = data;
  });
}

function getAddressControlsHtml() {
    fetch('http://localhost:8080/api/html/address')
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById("test-data").innerHTML = data;
  });
}


