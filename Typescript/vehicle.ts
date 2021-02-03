interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(value: number): void;
}
class Car implements Vehicle{
    
    name: string;
    speed: number;
    gears?: number;

    //declarations(*)
    constructor();
    constructor(name: string, speed: number, gears: number);

    //implemenation(1)
    constructor(name?: string, speed?: number, gears?: number){

        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(value: number): void {
        
        this.speed -= value;
    }
}
const car1 : Vehicle = new Car();
car1.name = "Audi"; car1.speed=200; car1.gears = 6;
console.log("Car1", car1);
car1.applyBrakes(45);
console.log("Car1", car1);

const car2: Vehicle = new Car("BMW", 180, 7);
console.log("Car2", car2);