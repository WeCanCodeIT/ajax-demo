// With VanillaJS

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("asideContent").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "../sidebar.html", true);
xhttp.send();

// With an interval for frequent updates

//setInterval(function() {
//	xhttp.open("GET", "../sidebar.html", true)
//	xhttp.send()
//}, 3000);

// With jQuery

//const $asideContent = $('#asideContent')
//
//$asideContent.load('../sidebar.html')
