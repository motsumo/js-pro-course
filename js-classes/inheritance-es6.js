class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName() {
        return this.name + " " + this.model;
    }

    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year
    }

    changeColor(color) {
        if (this.color == color) {
            alert("Your car already has the same color.")
        } else {
            this.color = color;
            alert("Your car has new color: " + color);
        }
    }

    calculateWay(kilometers, fuel) {
        let time = kilometers / this.maxSpeed;
        let fuelForRoad = this.fuelConsumption * (kilometers / 100);
        let refuel;
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
}

class BMW extends Car {
    constructor(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, sunroof = true) {
        super(name = "BMW", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.sunroof = sunroof;
    }

    getModel() {
        return this.model
    }
}

class Lexus extends Car {
    constructor(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, climateControl = true) {
        super(name = "Lexus", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.climateControl = climateControl;
    }

    getColor() {
        return this.color
    }
}

class Kia extends Car {
    constructor(model, year, color, maxSpeed, fuelCapacity, fuelConsumption, cruise = true) {
        super(name = "Kia", model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
        this.cruise = cruise;
    }

    getMaxSpeed() {
        return this.maxSpeed
    }
}

const car = new Car("Lada", "xray", 2015, "red", 160);
const bmw = new BMW("X6", 2017, "black", 220, 100, 6, false);
const lexus = new Lexus("NX", 2019, "green", 200);
const kia = new Kia("Sportage", 2018, "blue", 180);