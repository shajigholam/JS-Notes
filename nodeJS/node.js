/*
Node.js is a platform to run JS code - it is used for server-side operations
running JS on the browsers(front-end) 
v8 engine is written in c++ by Google. v8 engines compiles JS into machine code at run time so the computer can understand JS. (this is within the browser)
Node.js is a program also written in c++ that wraps v8 engine. Node.js takes the JS code, run through the v8 engine compiler(inside it) and complie js code onto machine code. so with node.js we can run the js code directly on our computer or server.but there are more things that node can do
- read and write files on a computer
- connect to a database
- act as a server for content

-the role of Node.js:
to run the js code on the back-end or server side and handling the requests coming from the browser. for example when the user make a request from the browser, the node run some js to react with the request and send the respond with the form of HTML or CSS.
*/

// the global obj in the browser called window but in node is global
console.log(global);

//we don't need to write global obj whenever we want to access the pre-defined methods and . .

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000); //it runs .log every 3sec

const int = setInterval(() => {
    console.log('in the interval'); //runs .log every sec
}, 1000);

//!NOTE! we can not use DOM with node.js
console.log(document.querySelector); //not working coz we don'd have access to document (which is in window obj) to interact with the web page

console.log(__dirname);
console.log(__filename);