document.addEventListener("DOMContentLoaded", function () {


    var form = document.querySelector("form");

    form.addEventListener('submit', function (ev) {

        ev.preventDefault();

        var team1 = form.querySelector('#team1').value;
        var points1 = form.querySelector('#points1').value;
        var team2 = form.querySelector('#team2').value;
        var points2 = form.querySelector('#points2').value;

        if(team1=="" || points1 == "" || team2 == "" || points2 == ""){
            alert("nie wszystkie pola są wypełnione");
            return;
        }

        if(team1 == team2){
            alert("podano taką samą nazwę drużyny");
            return;
        }

        if(points1 < 0 || points2 < 0){
            alert("punkty nie mogą być ujemne");
            return;
        }
        var tabToAdd = document.querySelectorAll("table tr");
        var tabToCopy = tabToAdd[1];

        var newTr = tabToCopy.cloneNode(true);

        var tabSubmit = [];
        tabSubmit[0] = team1;
        tabSubmit[1] = team2;
        tabSubmit[2] = points1 + " - " + points2;

        for(var i = 0 ; i < newTr.children.length ; i++){
            newTr.children[i].innerHTML=tabSubmit[i];
        }

        tabToCopy.parentElement.appendChild(newTr);

      });

});

