// example-6.js

function apiFunction(url) {
    handleResponse = function (res) {
        console.log(res);
        console.log(url);
    };

    fetch(url).then(handleResponse);
    console.dir(handleResponse);
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");