// example-5.js
function asyncExample() {
    var a = 20;

    function myFunc() {
        console.log(a);
    }

    setTimeout(myFunc, 3000);
    console.dir(myFunc);
}

asyncExample();