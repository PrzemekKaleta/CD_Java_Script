document.addEventListener("DOMContentLoaded", function() {

    var divBB = document.getElementById("bubblingButtons");
    var clickCount = 0;

    divBB.addEventListener("click", function () {
        clickCount++;
        divBB.setAttribute("data-counter", clickCount);
        console.log(clickCount);
    })



});