// With VanillaJS
// Example with local data
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("asideContent").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "../sidebar.html", true);
xhttp.send();

 Example with a hosted API
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// Get JSON from the returned string
		const res = JSON.parse(xhr.responseText);
		// Typical action to be performed when the document is ready:
		document.getElementById("asideContent").innerHTML = `<h2>${res}</h2>`;
	}
};
xhr.open("GET", "https://swapi.co/api/people/1/", true);
xhr.send();

// With an interval for frequent updates

setInterval(function() {
	xhttp.open("GET", "../sidebar.html", true)
	xhttp.send()
}, 3000);
