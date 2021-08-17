document.addEventListener("DOMContentLoaded", function() {

    var firstEl = document.querySelector(".first");
    var secondEl = document.querySelector("#second");
    var thirdEl = document.querySelector('h1[data-ex="third"]');
    var fourthEl = document.querySelector(".fourth");

    console.log(firstEl);
    console.log(secondEl);
    console.log(thirdEl);
    console.log(fourthEl);

    var firstAnswer = firstEl.firstElementChild.children[2];
    var secondAnswer = secondEl.parentElement.children[3];

    var halfThirdAnswer = thirdEl.parentElement.parentElement.lastElementChild.firstElementChild.children;
    var numb = Math.ceil(halfThirdAnswer.length / 2);
    console.log(numb);
    var thirdAnswer = thirdEl.parentElement.parentElement.lastElementChild.firstElementChild.children[numb - 1];

    var step1fourthAnswer = fourthEl.parentElement.querySelectorAll("article");
    var step2fourthAnswer = step1fourthAnswer[0].querySelectorAll("p");
    var fourthAnswer = step2fourthAnswer[1];

    console.log("answers");
    console.log(firstAnswer);
    console.log(secondAnswer);
    console.log(thirdAnswer);
    console.log(fourthAnswer);
});