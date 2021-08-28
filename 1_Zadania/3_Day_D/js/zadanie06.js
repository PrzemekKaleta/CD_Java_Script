document.addEventListener("DOMContentLoaded", function () {

    var team1 = document.getElementById("team1");
    var points1 = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    var form = document.querySelector("form");
    var table = document.querySelector("table");

    form.addEventListener("submit", function () {

        var valueTeam1 = team1.value;
        var valuePonts1 = points1.value;
        var valueTeam2 = team2.value;
        var valuePonts2 = points2.value;

        if(valueTeam1 == valueTeam2){

            alert("The same name of teams");
        }else if(valuePonts1 < 0 || valuePonts2 < 0){
            alert("Points cannot be less than 0")
        }else{






        }

    })



});

