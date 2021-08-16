document.addEventListener("DOMContentLoaded", function() {

var buttons = document.getElementsByTagName("button");
var span = document.querySelector("span");


for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        span.innerHTML++;
    })

}


});