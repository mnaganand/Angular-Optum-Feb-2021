console.log("Hello TypeScript");
var x = 10; // Type inference
//x = "20";  compilation error
var y; // implicitily is "any"
y = 10;
y = "abc";
var z; // Type annotation
z = "Hello";
z = 100;
