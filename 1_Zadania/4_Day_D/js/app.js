$(function(){

//1
    var people = $('section.people');

    var addButton = $("input[value='dodaj']");
    var namePerson = $("#addUser");
    var agePerson = $("#age");
    var ulMain = $("ul.main");
    var liToCollor = $(people).find("li");

    var collorMe = function (element) {
        var age = element.attr('data-age');

        if(age < 16){
            element.css('color','green');
        }else if(age > 40){
            element.css('color','brown');
        }else{
            element.css('color','blue');
        }

    };


    liToCollor.each(function () {
        collorMe($(this));
    });


    addButton.on('click', function () {
        clickFunction();
    });


    var clickFunction = function () {

        var personName = namePerson.val();
        var personAge = agePerson.val();

        var newLi = $('<li>' + personName + '</li>').attr('data-age',personAge);
        collorMe(newLi);
        ulMain.append(newLi);

    };

//2

    var whereIAm = $(".where-i-am");
    var div = $(whereIAm).find("div");

    var span1 = $("<span>first append</span>");
    var span2 = $("<span>second prepend</span>");
    var span3 = $("<span>third before</span>");
    var span4 = $("<span>fourth after</span>");

    div.before(span3);
    div.after(span4);
    div.append(span1);
    div.prepend(span2);








});