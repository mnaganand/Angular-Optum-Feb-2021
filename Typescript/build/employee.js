class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
}
const emp = new Employee(1, "Anil", 50000);
emp.location = "Mumbai";
console.log("Id: ", emp.id);
console.log("Name: ", emp.name);
console.log("Salary: ", emp.salary);
console.log("Location: ", emp.location);
