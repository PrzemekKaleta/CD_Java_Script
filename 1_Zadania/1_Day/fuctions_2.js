
//Boil eggs

var boilEggs = function (boilTime) {

    var interval = setInterval(function () {
        console.log("egg is boil");
    },5000);
    var timeout = setTimeout(function () {
        console.log("egg is ready");
        clearInterval(interval);
    },boilTime*1000);

}

boilEggs(21);

//The Biggest

var arrNubers = [33, 0, -100, 14, 56, 1,-112];

var theBiggest = function (arr) {

    arrNubers.sort(function (a, b) { return b - a } );

    return arrNubers[0];

}

console.log(theBiggest(arrNubers));