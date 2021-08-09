
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

var Rectangle




