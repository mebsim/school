/* global marked */
/* global MathJax */

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}

(function() {
    var xhttp = new XMLHttpRequest();
    var file = getQueryVariable("file");
    if (file == null) {
        document.getElementById("contents").innerHTML = "<pre>Error.</pre>";
        return;
    }
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("contents").innerHTML = marked(xhttp.responseText);
            MathJax.Hub.Queue(["Typeset",MathJax.Hub,"contents"]);
            document.title = file.split("/").join(" - ");
        } else if (xhttp.status >= 400) {
            document.getElementById("contents").innerHTML = "<pre>Error.</pre>";
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/ohnx/school/gh-pages/projects/" + file + ".md", true);
    xhttp.send();
})();

