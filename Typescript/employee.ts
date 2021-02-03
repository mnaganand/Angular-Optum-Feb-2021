class Employee{
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

const emp = new Employee(1, "Anil", 50000);
emp.location = "Mumbai";
console.log("Id: ", emp.id);
console.log("Name: ", emp.name);
console.log("Salary: ", emp.salary);
console.log("Location: ", emp.location);






