// example-2.js
function bankAccount(initialBalance) {
    var balance = initialBalance;

    return function () {
        return balance;
    };
}
var account = bankAccount(100000);

console.log(account());
console.dir(account);