// example-1.js
var num1 = 2;
var num2 = 3;

function sum() {
    return function () {
        return num1 + num2;
    };
}

var myFunc = sum();

console.dir(myFunc);