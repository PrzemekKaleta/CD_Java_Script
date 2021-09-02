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


});