// in node we create a server manually which lives in the backend of the website, and this server listen for the request from the browser and then decide what respond(like HTML or CSS) to send to the browser

//require a http module(is a node module)
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//create server
//every time a request is sent this callback runs
const server = http.createServer((req, res) => { 
    
    //req obj has differnt properties
    console.log(req.url, req.method);

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })

    greet();
    greet(); //this one does not executed

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    //status codes describe the type of response sent to the browser
    // routing
    let path = './views/';
    switch(req.url) {
        case '/':
        path += 'index.html';
        res.statusCode = 200; //ok
        break;
        case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
        case '/about-us': //if someone use the rouute that moved to another url
        res.statusCode = 301; //resource moved
        res.setHeader('Location', '/about');
        res.end();
        break;
        default:
        path += '404.html'; //not found
        res.statusCode = 404;
    }

    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            //res.write(data)
            res.end(data);
        }
    })
});

// ports are like doors that through them internet communications make. our server needs a port to communicate through. here the server is our own computer
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

// the packages that we have been using so far are the node packages(like fs and http). we also can use third-party packages which are not available in the node core and use them in node, like express. we can install these kind of packages by using npm(node package management)

//nodemon - is a live reload server (npm install -g nodemon)- to run the code with nodemon we should use nodemon filename instead of node filename (but on mac i should use npx nodemon server or or updating shell configuration that i don't want to)

// by running (npm init -y) create package.json file. this file will keep all the dependancies to our projects like third party packages.

// installed lodash by running: npm install lodash (it's a library)

//whenever we want to share our code like in github, we don't need to add node-module folder. after downloading the code and then running (npm install), all the dependancies are in the package.json and node-module will be created based on those. 
