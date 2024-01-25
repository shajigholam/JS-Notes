/*
*** Asynchronous JS ***
start sth now and finish it later
Synchronous JS
run ONE statement at a time
Thread
is like an ordered sequence of statements and only one of those statements can run ay a time

*** HTTP Requests ***
- makes http requests to get data from another server
- we make these requests to API endpoints
the API endpoints are like URLs for example spotify ..
we make a http request from our code which runs on the browser to some other server and that server response(data)
we get the data in the format of JSON
to play with API endpoint we can use a free API to get fake data: https://jsonplaceholder.typicode.com/
we can see the requests that we make by going to the Network tab
*/

//**** http request by using XMLHttpRequest
const request = new XMLHttpRequest(); //creates a request obj

//access the data and follow the progress
request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState); //4 different readystates values: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    //response obj contains properties in it, responseText proprty hols the actual data
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log('could not fetch the data');
    }
    //we also need to check request status coz if there is an error it will send empty data although it shouldn't. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
});

//set the request with open method we say what the type of the request is, and where to get it from
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//sent the request
request.send();


//**** or fetch api
fetch('todos/sam.json').then((response) => { //fetch returns promise
    console.log('resolved', response);
    return response.json(); //again return a promise
}).then((data) => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
});

// async & await
const getTodos = async () => { // async returns a promise
    // awaite will wait for a promise(here is fetch and .json) to resolve
    const response = await fetch('todos/sam.json');
    //if there was sth wrong with the json path
    if (response.status !== 200) {
        throw new Error();
    }
    const data = await response.json();

    return data;
};

console.log(1);
console.log(2);

getTodos()
    .then(data => {console.log('resolved: ', data)})
    .catch(err => console.log('rejected:', err.message));

console.log(3);
console.log(4);