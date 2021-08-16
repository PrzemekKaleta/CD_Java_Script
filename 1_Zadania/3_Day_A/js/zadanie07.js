document.addEventListener("DOMContentLoaded", function () {

var bigBox = document.getElementById("box");
var globalX = document.getElementById("globalX");
var globalY = document.getElementById("globalY");
var localX = document.getElementById("localX");
var localY = document.getElementById("localY");

bigBox.addEventListener("mouseover", function (event) {

    localX.innerText = event.clientX;
    localY.innerText = event.clientY;
    globalX.innerText = event.screenX;
    globalY.innerText = event.screenY;

})

});