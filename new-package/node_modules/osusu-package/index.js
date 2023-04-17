const { upperCase } = require("upper-case")

function greet(name){
    console.log(upperCase(`Welcome ${name} to my world!`))
}

module.exports = greet; 