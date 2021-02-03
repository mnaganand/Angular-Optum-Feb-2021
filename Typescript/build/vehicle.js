export class Car {
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
