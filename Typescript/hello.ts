console.log("Hello TypeScript");

var x = 10; // Type inference
//x = "20";  compilation error

var y; // implicitily is "any"
y = 10;
y = "abc";


var z : string; // Type annotation
z = "Hello";
//z = 100; compilation error

//user --> id, name
var user : {id: number, name: string, location?: string};
user  = {id: 1, name: "Anil"}; // will work
//user  = {id: 1, name: "Anil", location: "Mumbai"}; // will work


var foo : () => void;

foo = function(): void{
    
}

