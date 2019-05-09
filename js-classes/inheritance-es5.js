function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function () {
    return this.name + " " + this.model;
}

Car.prototype.getAge = function () {
    var currentYear = new Date().getFullYear();
    return currentYear - this.year
}

Car.prototype.changeColor = function (color) {
    if (this.color == color) {
        alert("Your car already has the same color.")
    } else {
        this.color = color;
        alert("Your car has new color: " + color);
    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
    var time = kilometers / this.maxSpeed;
    var fuelForRoad = this.fuelConsumption * (kilometers / 100);
    var refuel;
    if (fuel < 10) {
        alert("You need to refuel")
    }
    if ((fuelForRoad - fuel) > 0) {
        refuel = Math.trunc((fuelForRoad - fuel) / this.fuelCapacity) + 1;
        alert("You need to refuel " + refuel + " times");
    } else {
        alert("You don't need to refuel");
    }
    alert("Time that you need to reach the destination: " + Math.round(time) + " hours");
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function BMW(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, sunroof = true) {
    BMW.superclass.constructor.call(this, name = "BMW", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.sunroof = sunroof;
}

extend(BMW, Car);

BMW.prototype.getModel = function () {
    return this.model
}

function Lexus(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, climateControl = true) {
    Lexus.superclass.constructor.call(this, name = "Lexus", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.climateControl = climateControl;
}

extend(Lexus, Car);

Lexus.prototype.getColor = function () {
    return this.color
}

function Kia(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, cruise = true) {
    Kia.superclass.constructor.call(this, name = "kia", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    this.cruise = cruise;
}

extend(Kia, Car);

Kia.prototype.getMaxSpeed = function () {
    return this.maxSpeed
}

var car = new Car("Lada", "xray", 2016, "red", 160);
var bmw = new BMW("X6", 2017, "black", 220, 100, 6, false);
var lexus = new Lexus("NX", 2019, "green", 200);
var kia = new Kia("Sportage", 2018, "blue", 180);