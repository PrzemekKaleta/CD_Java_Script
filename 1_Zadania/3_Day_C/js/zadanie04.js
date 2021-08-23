document.addEventListener("DOMContentLoaded", function() {

    var button = document.querySelector(".button");
    var list = document.querySelectorAll(".list li");

    button.addEventListener("click", function () {

        for (var i = 0; i < list.length; i++) {
        list[i].parentElement.removeChild(list[i]);

    }
    })

});