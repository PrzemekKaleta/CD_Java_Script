$(function(){
//1
    var ironManBt = $('.ironMan-btn');
    var thorBt = $('.thor-btn');
    var wolverineBt = $('.wolverine-btn');

    var allBts = $('.hero-buttons').find('button');

    ironManBt.on('click', function () {

        console.log("kliknieto mnie");

    })

    thorBt.one('click', function () {

        console.log("kliknięto mnie, ale już drugi raz nie dam się kliknąć");

    })

    wolverineBt.on("click", function () {

        allBts.off("click");

    })
//3

    var allDd = $('.superhero-description').find('dd');
    var allDt = $('.superhero-description').find('dt');

    allDd.hide();

    allDt.on('click', function () {

        var dd = $(this).next();

        if(dd.is(':visible')){
            dd.hide();
        }else{
            dd.show();
        }


    });

//4
    var button = $(".show-hide-btn");
    button.type = "password";

    button.on('click', function (event) {

        var input = $(this).prev();

        if(input.attr("type")=="password"){
            input.attr("type","text");
        }else if(input.attr("type")=="text")
            input.attr("type","password");

        event.preventDefault()
    });

//5
    var menu = $('.menu');
    menu.on('mouseenter',function () {
        console.log("Hurrey");
    });

//6
    var loginForm = $('form.login');

    $(loginForm.find("input")).on("click",function () {

        $(this).css('box-shadow','green 5px 5px 10px');

    });

    $(loginForm.find("input")).on("mouseleave",function () {

        $(this).css('background-color','grey');

    });

    $(loginForm.find("input")).on("mouseenter",function () {

        $(this).css('background-color','white');

    });



});