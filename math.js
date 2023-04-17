const add = (a, b) => {
    return a + b; 
}

const substract = (a, b) => {
    return a - b; 
}

// module.exports = (a, b) => {
//     return a * b; 
// }
 
// module.exports.add = add; 
// module.exports.substract = substract

module.exports = {
    add,
    substract
}