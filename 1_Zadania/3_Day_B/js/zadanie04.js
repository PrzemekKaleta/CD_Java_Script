document.addEventListener("DOMContentLoaded", function() {
    var firstElement = document.querySelector(".first");
    var firstChild = firstElement.firstElementChild;
    var thirdChild = firstChild.children[2];

    console.log(firstElement);
    console.log(firstChild);
    console.log(thirdChild);

    var secondId = document.querySelector("#second");
    var parentId = secondId.parentElement;
    var fourthChild = parentId.children[3];

    //var attibuteData = document.querySelector("[data]");


});