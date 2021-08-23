document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("remove");
    var body = document.querySelector("body");

    button.addEventListener("click", function () {
        body.removeChild(button);
    })


});