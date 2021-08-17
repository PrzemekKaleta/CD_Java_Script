document.addEventListener("DOMContentLoaded", function() {
    var aAdd = document.querySelectorAll("a");

    for(var i = 0; i < aAdd.length; i++){

        aAdd[i].addEventListener("click", function () {

            this.nextElementSibling.classList.toggle("hidden");


        })

    }


});