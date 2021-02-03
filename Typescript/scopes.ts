//var x

console.log("x: ", x);
var x = 10; //global
console.log("x: ", window.x);

var y;
console.log("y: ", y);

//console.log("z: ", z);  //Exception

//bar(); will work
function bar(){
    // var msg

    console.log("in bar");
    var a = 100;
    if(x > 1){
        let msg = "hello";
        console.log("msg: ", msg);
    }
   
}
bar();

console.log("App over");