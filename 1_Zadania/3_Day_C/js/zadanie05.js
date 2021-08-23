document.addEventListener("DOMContentLoaded", function() {

var buttons = document.querySelectorAll(".deleteBtn");

for (var i = 0 ; i <buttons.length ; i ++){
    buttons[i].addEventListener("click", function () {

        this.parentElement.parentElement.remove();

    })
}

});