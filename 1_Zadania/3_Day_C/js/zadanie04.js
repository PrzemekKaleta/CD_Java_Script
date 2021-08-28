document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementById("remove");
    var listChildren = document.querySelectorAll(".list li");

    var list = document.querySelector(".list");
    var listChildren2 = list.children;
    // w tym przypadku (listChildren2) nie da się skasować wszystkich 'dzieci' na raz.

    button.addEventListener("click", function () {

        for(var i = 0; i < listChildren.length; i++){

            listChildren[i].parentElement.removeChild(listChildren[i]);
        }

    })

});