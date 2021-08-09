
//Funkcja dodana do prototyou

String.prototype.upperLower = function(){

    var result = "";
    var upDown = true;

    for(var j=0; j<this.length; j++){

        if(this[j]===" "){
            result +=" ";
        }else{
            if(upDown){
                result += this[j].toUpperCase();
                upDown = false;
            }else{
                result += this[j].toLowerCase();
                upDown = true;
            }

        }

    }
    return result;
}

var stringForFun = "string for FUN";

console.log(stringForFun.upperLower());

//Car

var Car = function (brand, color){
    this.brand = brand;
    this.color = color;
    this.km = 0;

    this.printCarInfo = function() {
        console.log("Brand " + this.brand + ", color: " + this.color + ", total distance [km]: " + this.km);
    }
    this.drive = function(km){
        this.km += km;
    }

}

var golf = new Car("vw","black");
golf.printCarInfo();

golf.drive(20);

golf.drive(100);

golf.printCarInfo();


Car.prototype.inspections = [];
Car.prototype.addInspection = function(inspection){
    this.inspections.push(inspection);
}
Car.prototype.showInspections = function () {
    console.log(this.inspections.toString())
}

golf.addInspection("2002");
golf.addInspection("2013");

golf.showInspections();

//Robot

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

var roboA = new Robot("adam");
var roboB = new Robot("Barbara");
var roboC = new Robot ("Czarek");

console.log(roboA.isFunctional);
console.log(roboB.isFunctional);
console.log(roboC.isFunctional);

roboB.isFunctional = false;

roboA.sayHi("Stefan");
roboB.sayHi("Stefan");
roboC.sayHi("Stefan");

roboA.changeName("Adam");
roboB.fixIt();
roboC.fixIt();

roboA.sayHi("Tadek");
roboB.sayHi("Tadek");
roboC.sayHi("Tadek");

//Figures

var Rectangle = function(sideA, sideB){
    this.sideA = sideA;
    this.sideB = sideB;
}

Rectangle.prototype.getArea = function () {
    return this.sideA * this.sideB;
}

Rectangle.prototype.getPerimiter = function () {
    return (this.sideA + this.sideB)*2;
}

var rectangle1= new Rectangle(2,4);
var rectangle2 = new Rectangle(4,1.1);

console.log(rectangle1.getArea());
console.log(rectangle2.getArea());
console.log(rectangle1.getPerimiter());
console.log(rectangle2.getPerimiter());

//Calculator

var Calculator = function () {
    this.table = [];
}

Calculator.prototype.add = function (num1, num2) {
    var result = num1 + num2;
    this.table.push("added " + num1 + " to " + num2 + " got " + result);
    return result;
}

Calculator.prototype.multiply = function (num1, num2) {
    var result = num1 * num2;
    this.table.push("multiplied " + num1 + " with " + num2 + " got " + result);
    return result;
}

Calculator.prototype.substract = function (num1, num2) {
    var result = num1 - num2;
    this.table.push("substracted " + num1 + " from " + num2 + " got " + result);
    return result;
}

Calculator.prototype.divide = function (num1, num2) {
    if(num2 === 0){
        this.table.push("divided " + num1 + " by " + num2 + " is incorrect");
        return "can not divide by 0";
    }else {

        var result = num1 / num2;
        this.table.push("divided " + num1 + " by " + num2 + " got " + result);
        return result;
    }
}


Calculator.prototype.printOperations = function () {

    this.table.forEach(function(element, index, array){
        console.log(element);
    });

}

Calculator.prototype.clearOperations = function () {
    this.table = [];
}


var calculator = new Calculator();

calculator.add(1,2);
calculator.multiply(2,-5);
console.log(calculator.divide(3,5));
console.log(calculator.divide(3,0));
calculator.substract(30,-90);

calculator.printOperations();

calculator.clearOperations();

calculator.printOperations();

calculator.add(1000,1010);

calculator.printOperations();




































