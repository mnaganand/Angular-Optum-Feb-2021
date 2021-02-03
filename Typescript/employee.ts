export class Employee{
    //id, name, salary
    private _location: string;
    constructor(public id?: number, public name?: string, public salary?: number){}

    get location(){
        return this._location;
    }

    set location(value: string){
        this._location = value;
    }

}








