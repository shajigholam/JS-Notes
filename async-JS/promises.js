const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data); 
            } else if (request.readyState === 4) {
                reject('error getting data');
            }
        });
        request.open('GET', resource);
        request.send();
    });
};
//it will get the rest of the data sequentially, mam.json..sam... rey..
getTodos('todos/mom.json').then((data) => {
    console.log('promise 1 resolved', data);
    return getTodos('todos/sam.json');
}).then(data => {
    console.log('promise 2 resolved', data);
    return getTodos('todos/rey.json');
}).then(data => {
    console.log('promise 3 resolved', data);
}).catch((err) => {
    console.log('promise rejected:', err);
});


// promise example (just a dumby exp.)
//we have several data(like json and instead of having hell callbacks we use promises)
const getSomething = () => {
    return new Promise((resolve, reject) => {
        // e.g. we fetch some data here
        resolve('some data');

        reject('some data');
    });
};

//getSomething function returns a promise so we can have the 2 callbacks which are .then and .catch on it
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});