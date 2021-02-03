export class Employee {
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
