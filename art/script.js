var images;
var currIndex = -1;
var interval = null;
var galleryData;
var frontElem, backElem, descElem;

(function() {
    frontElem = document.getElementById("front");
    backElem = document.getElementById("back");
    descElem = document.getElementById("under");
    document.getElementById("prev").addEventListener("click", function(){removeIntervals();backPic();});
    document.getElementById("next").addEventListener("click", function(){removeIntervals();startIntervals();advancePic();});
    
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 37) {removeIntervals();backPic();}
        if (evt.keyCode == 39) {removeIntervals();startIntervals();advancePic();}
    };
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            galleryData = JSON.parse(xhttp.responseText);
            images = galleryData.images;
            document.title = galleryData.name;
            nextPic();
            startIntervals();
        }
    };
    xhttp.open("GET", "images.json", true);
    xhttp.send();
})();

function startIntervals() {
    interval = setInterval(function(){advancePic();}, galleryData.time*1000);
}

function removeIntervals() {
    clearInterval(interval);
    interval = null;
}

function advancePic() {
    nextBack();
    fadeOut(frontElem, function() {nextPic();});
}

function backPic() {
    prevBack();
    fadeOut(frontElem, function() {prevPic();});
}

function fadeOut(element, callback) {
    if (callback == null) callback = function(){};
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.0){
            clearInterval(timer);
            element.style.opacity = 1.0;
            callback();
            return;
        }
        element.style.opacity = op;
        op -= 0.06;
    }, 50);
}

function prevBack() {
    var temp = currIndex;
    temp--;
    if (temp < 0) {
        temp = images.length - 1;
    }
    backElem.style.backgroundImage = "url(\""+images[temp].img+"\")";
}

function prevPic() {
    currIndex--;
    if (currIndex < 0) {
        currIndex = images.length - 1;
    }
    frontElem.style.backgroundImage = "url(\""+images[currIndex].img+"\")";
    descElem.innerHTML = "<div class=\"desc\"><h1>" + images[currIndex].name + "</h1>\n<div>" + images[currIndex].desc + "</div></div>";
}

function nextBack() {
    var temp = currIndex;
    temp++;
    if (temp >= images.length) {
        temp = 0;
    }
    backElem.style.backgroundImage = "url(\""+images[temp].img+"\")";
}

function nextPic() {
    currIndex++;
    if (currIndex >= images.length) {
        currIndex = 0;
    }
    frontElem.style.backgroundImage = "url(\""+images[currIndex].img+"\")";
    descElem.innerHTML = "<div class=\"desc\"><h1>" + images[currIndex].name + "</h1>\n<div>" + images[currIndex].desc + "</div></div>";
}