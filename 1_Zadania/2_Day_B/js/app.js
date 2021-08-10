
document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // 1

    var printAll = function(tab){
        for(var i = 0; i < tab.length; i++){
            console.log(tab[i]);
            console.log(typeof tab[i]);
        }
    };


    var oldId = homeElement.id;
    var oldClass = homeElement.className;

    homeElement.id = oldClass;
    homeElement.className = oldId;

    // 2

    console.log(blocks);
    console.log(typeof blocks);
    printAll(blocks);


    // 3



    for(var i = 0 ; i <blocks.length ; i++){
        console.log(blocks[i].innerHTML);
        console.log(blocks[i].outerHTML);
        console.log(blocks[i].innerText);
        blocks[i].innerHTML = "Nowa wartośc";
    }

    // 4

    console.log(homeElement.id);


});
