document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.getElementsByClassName("deleteBtn");

    for(var i = 0; i < buttons.length; i++){

        buttons[i].addEventListener("click", function () {
            this.parentElement.parentElement.remove();

        })

    }

});