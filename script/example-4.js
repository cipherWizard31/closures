// example-4.js
function stopWatch() {
    var startTime = Date.now();

    var getDelay = function () {
        console.log(Date.now() - startTime);
    };
    return getDelay;
}

var timer = stopWatch();

for (let i = 0; i < 100000000; i++) {
    var a = Math.random() * 1000000;
}

timer();

console.dir(timer);
timer = null;

timer();