class Car {
    //implemenation(1)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(value) {
        this.speed -= value;
    }
}
const car1 = new Car();
car1.name = "Audi";
car1.speed = 200;
car1.gears = 6;
console.log("Car1", car1);
car1.applyBrakes(45);
console.log("Car1", car1);
const car2 = new Car("BMW", 180, 7);
console.log("Car2", car2);
