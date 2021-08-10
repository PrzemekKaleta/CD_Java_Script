document.addEventListener("DOMContentLoaded", function() {

    var articleFirst2 = document.querySelector("article.first");

    var elementsH2 = articleFirst2.querySelectorAll("h2");
    console.log(elementsH2.length);
    console.log(elementsH2[0]);

    var homeId = document.getElementById("home");
    console.log(homeId);

    var homeIdSelector = document.querySelector("#home");
    console.log(homeIdSelector);

    var blocksClass = document.getElementsByClassName("blocks");

    for(var i = 0; i <blocksClass.length; i++){
        console.log(blocksClass[i]);
    }

    var blocksClassSelector = document.querySelector(".blocks");
    console.log(blocksClassSelector);

console.log("CL 1:");

    var articleFirst = document.querySelector("article.first");
    console.log(articleFirst);

    var elementsH1 = articleFirst.getElementsByTagName("h2");
    console.log(elementsH1.length);
    var elementsOffers = articleFirst.querySelectorAll(".offers");

    elementsOffers.forEach(function(element, index){
        console.log(index + " element with class offers");
        console.log(element);
    });

    var divElements = articleFirst.getElementsByTagName("div");

    console.log(divElements);

    for(var j = 0; j <divElements.length; j++){
        console.log(j + " element with tag div");
        console.log(divElements[j]);
    }

console.log("CL 2:");

    var excercise2 = document.querySelector("#exercise2");
    console.log(excercise2);

    var hardExcercise2 = document.querySelector("nav").querySelector("ul").querySelectorAll("li");

    for(var i=0; i<hardExcercise2.length; i++){
        var temporary = hardExcercise2[i].querySelector("#exercise2");
        if(temporary){
            console.log(temporary);
        }
    }

console.log("CL 3:");

    var home2 = document.getElementById("home");
    var home1 = document.querySelector("#home");
    
    console.log(home1);
    console.log(home2);



});