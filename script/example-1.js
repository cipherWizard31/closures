// example-1.js
var num1 = 2;

function sum() {
    var num2 = 3;
    return function () {
        return num1 + num2;
    };
}

var myFunc = sum();

console.dir(myFunc);