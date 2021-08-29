document.addEventListener("DOMContentLoaded", function () {

    var team1 = document.getElementById("team1");
    var points1 = document.getElementById("points1");
    points1.type = "number";
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    points2.type = "number";
    var form = document.querySelector("form");
    var table = document.querySelector("table");
    var toClone = table.firstElementChild.children[1];

    form.addEventListener("submit", function (ev) {

        ev.preventDefault();

        console.log("type 1");

        var valueTeam1 = team1.value;
        var valuePonts1 = points1.value;
        var valueTeam2 = team2.value;
        var valuePonts2 = points2.value;
        var regexNum = /[0-9]/g;
        var regexNum2 = /[0-9]/g;
        var regexStr = /[a-z]/g;

        if(valueTeam1.trim().length == 0||valueTeam2.trim().length == 0){
            alert("Nothing write as a name of team");
        }else if(valueTeam1 == valueTeam2) {

            alert("The same name of teams");

        }else if(!regexNum.test(valuePonts1) || regexStr.test(valuePonts1) || !regexNum2.test(valuePonts2) || regexStr.test(valuePonts2)){
            alert("Points should be numbers");

        }else if(valuePonts1 < 0 || valuePonts2 < 0){
            alert("Points cannot be less than 0")
        }else{

            var nextTr = toClone.cloneNode(true);
            nextTr.children[0].innerHTML = valueTeam1;
            nextTr.children[1].innerHTML = valueTeam2;
            nextTr.children[2].innerHTML = valuePonts1 + " - " + valuePonts2;

            toClone.parentElement.appendChild(nextTr);

        }

    })



});

