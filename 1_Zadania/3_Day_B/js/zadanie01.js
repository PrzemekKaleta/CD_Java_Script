document.addEventListener("DOMContentLoaded", function() {
var divs = document.querySelectorAll("div");


    for(var i = 0; i < divs.length; i++){

        divs[i].addEventListener("mouseover", function (evt) {
            this.classList.add("hovered");

            this.firstElementChild.firstElementChild.style.backgroundColor = "blue";
            this.firstElementChild.lastElementChild.style.backgroundColor = "red";

            var numb = this.firstElementChild.children.length;

            if(numb > 2) {
                for (var j = 1; j < numb - 1; j++) {
                    this.firstElementChild.children[j].style.backgroundColor = "green";
                }
            }

        });

    }

});
