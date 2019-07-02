function add(num1, num2) {
    num = num1 + num2;
    return num
}

function subtract(num1, num2) {
    num = num1 - num2;
    return num

}

function sum(anArray) {
    myArray = anArray.reduce((a, b) => a + b, 0);
    return myArray
    
}

module.exports = {add, subtract, sum}