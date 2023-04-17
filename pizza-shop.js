const EventEmitter = require('node:events'); 

class PizzaShop extends EventEmitter{
    constructor(){
        super(); 
        this.ordernumber = 0; 
    }

    order(){
        this.ordernumber++; 
        this.emit("order", "Large", "Pineaple")
    }

    display(){
        console.log("Order number of pizza: ", this.ordernumber)
    }
}

module.exports = PizzaShop; 