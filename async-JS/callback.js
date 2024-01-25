const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            //callback(undefined, request.responseText);
            //instead use JSON 
            const data = JSON.parse(request.responseText); //JSON will change to JS obj
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch data', undefined);
        }
    });
    request.open('GET', 'todos.json');
    request.send();
};
console.log(1);
console.log(2);
//calling getTodos and passing  a callback function as an argument
getTodos((err, data) => { //this is callback function
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log(3);
console.log(4);
