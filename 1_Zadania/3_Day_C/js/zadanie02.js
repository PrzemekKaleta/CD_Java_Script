document.addEventListener("DOMContentLoaded", function() {

var button = document.querySelector(".button");

button.addEventListener("click", function () {

    var menu = document.querySelector(".menu");

    var liItems = menu.children.length;
    var nextLiNumber = parseInt(liItems, 10) + 1;

    var newLi = document.createElement("li");
    newLi.innerText = "Element " + nextLiNumber + " , w chwili dodania było " + liItems + " elementów.";

    menu.appendChild(newLi);

})

});
