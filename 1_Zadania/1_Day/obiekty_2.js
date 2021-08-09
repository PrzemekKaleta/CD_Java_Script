
//Access to function

makeTea();

function makeTea(){
    console.log("Tea");
}

makeCoffee();

var makeCoffee = function () {
    console.log("Coffee")
}

//in case of coffee it will be a mistake


//Inside and outside ranges

var fooOutside = function () {

    var name = "Jack";
    var foo = function () {
        var age = 36;
        console.log(hi + " " + name + " " + age);
    }

    foo();
    name = "Tom";
    foo();
    var bar = function () {
        console.log(hi + " | " + name + " | " + age);

    }
    var age = 20;
    bar();


}

var hi = "Hello";

fooOutside();

var name = "Mike";

fooOutside();

//Higher order functions


var numbers = [5,2,21,19,4,0];

numbers.sort();
console.log(numbers);

numbers.sort(function (a, b) { return a - b });
console.log(numbers);


//Time function - setTimeout

var timeout = setTimeout(
    function () {
        console.log("3 seconds");
    },3000);

console.log("hey");

// try with and without
clearTimeout(timeout);

//Time function - setInterval



var interval = setInterval(function(){
    console.log("hop!");
},2550);

var endInterval = setTimeout(function () {console.log("die frog");
    clearInterval(interval);
},10000);
















