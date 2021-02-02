const os = require('os');
const chalk = require('chalk');


console.log(chalk.yellow.inverse("The module App1asdadasad"));

console.log("File name: ", __filename);
console.log("Dir name: ", __dirname);

console.log("OS Freemem: ", os.freemem());
console.log("OS CPUS: ", os.cpus().length);


const math = require('./math');
console.log(chalk.red.inverse(math));
console.log("Add", math.add(3, 4));
console.log("Multiply", math.multiply(3, 4));


const mylib = require("./my-lib");
console.log("mylib main: ", mylib);
console.log(mylib.getData());




