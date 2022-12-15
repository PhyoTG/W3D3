// add(x, y)
// subtract(x, y)
// multiply(x, y)
// divide(x, y)
// pi // constant set to 3.14

function add(x, y){
    return x+y;
}
function subtract(x, y){
    return x-y;
}
function multiply(x, y){
    return x*y;
}
function divide(x, y){
    return x/y;
}
const pi = 3.14; // constant set to 3.14

module.exports = {
    add: (x,y)=> add(x,y),
    subtract: (x,y)=> subtract(x,y),
    multiply: (x,y)=> multiply(x,y),
    divide: (x,y)=> divide(x,y),
    pi: pi
}