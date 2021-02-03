// function statement
function test(){}

// function expression
const add = function(x, y){
    console.log("add")
}
add(2,3);

//Arrow functions
let calcualte = (x, y) => {
    return x + y;
}
console.log("Calculate: ", calcualte(10, 20));

calcualte = (x, y) =>  x * y;
console.log("Calculate: ", calcualte(10, 20));

const squareIt = a => a * a;
console.log("SquareIt: ", squareIt(14));

// functional programming
const numbers = [2,3,6,7,9,11,14,17,18,19,20];

const result = 
        //numbers.filter((item, index) => {return item % 2 === 0});
        numbers
            .filter(item => item % 2 === 0)
            .map(n => n * n);

console.log(result);

//Async programming

const t_user = {
    id: 100,
    print: function(){
        console.log("Id: ", this.id);

        setTimeout(()=>{
            console.log("Id in timeout: ", this.id);
        }, 2000);
    }
};

t_user.print();



