document.addEventListener("DOMContentLoaded", function() {

var buttons = document.getElementsByTagName("button");

for(var i=0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function () {
        this.nextElementSibling.firstElementChild.innerHTML++;
    })

}



});