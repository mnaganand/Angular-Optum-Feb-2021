export interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(value: number): void;
}
export class Car implements Vehicle{
    
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
