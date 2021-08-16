document.addEventListener("DOMContentLoaded", function () {

    console.log("CL: 1");
    var ex1Li = document.querySelectorAll(".ex1 li");


    for(var i = 0 ; i <ex1Li.length; i++){
        console.log("B " + i + " " + ex1Li[i].dataset.direction);
        console.log("C " + i + " " + ex1Li[i].hasAttribute("data-direction"));

        if(!ex1Li[i].hasAttribute("data-direction")){
            ex1Li[i].setAttribute("data-direction", "up");
        }

    }

    console.log("1b");
    var ex2Li = document.querySelectorAll(".ex1 li");

    ex2Li[4].classList.add("big");

    for(var i = 0 ; i <ex2Li.length; i++){

        console.log("D " + i + " " + ex2Li[i].dataset.direction);

        if(i%2!=0){
            ex2Li[i].style.backgroundColor = "green";
        }

        if(i%3==0){
            ex2Li[i].style.borderBottom = "2px solid black";
        }



    }

    console.log("CL: 2");

    var ex2option = document.querySelectorAll(".ex2 option");

    for(var i = 0 ; i < ex2option.length; i++){
        console.log(ex2option[i].getAttribute("value"));
        var tempOption = ex2option[i].getAttribute("value");
        ex2option[i].innerHTML = tempOption;

        ex2option[i].dataset.year = parseInt(tempOption,10) + 20;
    }

    console.log("CL: 3");


    var elementChrome = document.querySelector("div.exercise.ex3 .chrome").parentElement;

    var divChrome = elementChrome.querySelector("div.chrome");
    var aChrome = elementChrome.querySelector("a");
    divChrome.style.width = "100px";
    aChrome.innerText = "Chrome";



    var elementFirefox = document.querySelector("div.exercise.ex3 .firefox").parentElement;
    var divFirefox = elementFirefox.querySelector("div");
    var aFirefox = elementFirefox.querySelector("a");
    divFirefox.style.backgroundImage = "url(\"assets/img/firefox.png\")";
    aFirefox.innerText = "Firefox";
    aFirefox.href = "https://www.mozilla.org/pl/firefox/new/";


    var elementEdge = document.querySelector("div.exercise.ex3 .edge").parentElement;
    var aEdge = elementEdge.querySelector("a");
    var divEdge = elementEdge.querySelector("div");
    aEdge.href = "https://www.microsoft.com/pl-pl/edge";
    divEdge.style.backgroundImage = "url(\"assets/img/edge.png\")";

    console.log("CL: 4");

    var spanEx4 = document.querySelectorAll(".ex4 span");

    for(var i = 0 ; i < spanEx4.length; i++){

        switch (spanEx4[i].id) {
            case "name":
                spanEx4[i].innerHTML = "Jan Nowak";
                break;
            case "fav_color":
                spanEx4[i].innerHTML = "Black";
                break;
            case "fav_meal":
                spanEx4[i].innerHTML = "Pizza";
                break;
            default:
                spanEx4[i].innerHTML = "No value";
        }

        console.log(spanEx4[i].id);
    }

    console.log("CL: 5");

    var ulEx5 = document.querySelector(".ex5 ul");

    ulEx5.classList.add("menu");
    var liFromUlEx5 = ulEx5.getElementsByTagName("li");

    for(var i=0; i < liFromUlEx5.length; i++){
        liFromUlEx5[i].classList.add("menuElement");
        liFromUlEx5[i].classList.remove("error");
    }

    console.log("CL: 6");

    var liEx6 = document.querySelectorAll(".ex6 li");
    

    for(var i = 0 ; i < liEx6.length; i++){
        //A
        liEx6[i].dataset.id = 1 + i;
        //B
        liEx6[i].setAttribute("id", i + 1);
    }







});