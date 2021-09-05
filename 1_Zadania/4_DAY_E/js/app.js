$(function () {

//1

    console.log("part 2");

    var buttonTask1 = $(".task_1 button");

    var i = 0;

    buttonTask1.on('click',function () {

        var div = $('<div>');
        var textInside = "inside " + (++i);
        var p = $('<span>' + textInside + '</span>');
        p.hide();
        div.append(p);
        $(buttonTask1).parent().append(div);

    });

    var section1 = $(".task_1");

    section1.on('mouseenter','div', function () {
        $(this).find('span').show();

    });

    section1.on('mouseleave','div', function () {
        $(this).find('span').hide();

    });

//2
    var people = $("section.people");
    var addButton = $("input[value='dodaj']");
    var ulMain = $("ul.main");
    var namePerson = $("#addUser");
    var agePerson = $("#age");

    var deleteButton = $('<button class="delete">Usuń</button>');

    $(people).find('li').append(deleteButton);

    addButton.on('click', function () {
        clickFunction();
    });

    var clickFunction = function () {
        var personName = namePerson.val();
        var newDeleteButton = $('<button class="delete">Usuń</button>');

        var personAge = agePerson.val();
        var newLi = $('<li>' + personName + '</li>').attr('data-age',personAge);
        newLi.append(newDeleteButton);
        ulMain.append(newLi);


    };

    people.on('click','button.delete',function () {
        $(this).parent().remove();

    });

//3
    var sortButton = $("<button>Sortuj</button>");
    people.append(sortButton);

    sortButton.on("click", function () {

        var toSortUl = $('ul.main');
        var peopleList = toSortUl.children('li');
        console.log(peopleList);

        var sortList = Array.prototype.sort.bind(peopleList);

        sortList(function(a,b){

            var aText = a.innerHTML.toLowerCase();
            var bText = b.innerHTML.toLowerCase();

            if(aText < bText){
                return -1;
            }
            if(aText > bText){
                return 1;
            }
            return 0;
        });

        toSortUl.append(peopleList);
    });


});