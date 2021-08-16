document.addEventListener("DOMContentLoaded", function () {

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var ul = document.getElementById("ul");
    var ol1 = document.getElementById("ol1");
    var ol2 = document.getElementById("ol2");
    var li = document.querySelectorAll("li");
    var table = document.getElementById("table");
    var tr1 = document.getElementById("tr1");
    var tr2 = document.getElementById("tr2");
    var td = document.querySelectorAll("td");

    div1.addEventListener('click', function (ev) {
        makeColor(this);
    })
    div2.addEventListener('click', function (ev) {
        makeColor(this);
    })
    ul.addEventListener('click', function (ev) {
        makeColor(this);
    })
    ol1.addEventListener('click', function (ev) {
        makeColor(this);
    })
    ol2.addEventListener('click', function (ev) {
        makeColor(this);
    })

    for(var i = 0; i <li.length ; i++) {
        li[i].addEventListener('click', function (ev) {
            makeColor(this);
            ev.stopPropagation();
        });
    }
    table.addEventListener('click', function (ev) {
        makeColor(this);
    })
    tr1.addEventListener('click', function (ev) {
        makeColor(this);
    })
    tr2.addEventListener('click', function (ev) {
        makeColor(this);
    })
    for(var i = 0; i<td.length ; i++) {
        td.addEventListener('click', function (ev) {
            makeColor(this);
            ev.stopImmediatePropagation();
        })
    }

});

function makeColor(clicked) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    clicked.style.backgroundColor = randomColor;
}