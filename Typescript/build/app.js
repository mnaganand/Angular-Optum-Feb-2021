//default import 
import add from './math.js';
//named import
import { multiply, divide } from './math.js';
import { Employee } from './employee.js';
import { Car } from './vehicle.js';
console.log("add: ", add(2, 3));
console.log("multiply: ", multiply(2, 3));
console.log("divide: ", divide(20, 3));
//Employee
const emp = new Employee(1, "Anil", 50000);
emp.location = "Mumbai";
console.log("Id: ", emp.id);
console.log("Name: ", emp.name);
console.log("Salary: ", emp.salary);
console.log("Location: ", emp.location);
//Vehicle
const car1 = new Car();
car1.name = "Audi";
car1.speed = 200;
car1.gears = 6;
console.log("Car1", car1);
car1.applyBrakes(45);
console.log("Car1", car1);
const car2 = new Car("BMW", 180, 7);
console.log("Car2", car2);
