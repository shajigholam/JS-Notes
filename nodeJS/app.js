/* Express - is a popular web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and tools to handle common tasks. 
npm install express
*/
//require express 
const express = require('express'); //returns a function
// creating express app
const app = express();

//listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
// res.send('<p>about page</p>');
res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
res.redirect('/about');
});

// 404 page(should be at the end coz the request looking for the match from top to bottom, so by this point if no match found by using use method we send 404 page to the browser) - also in this case we manually need to set the status to 404
app.use((req, res) => {
res.status(404).sendFile('./views/404.html', { root: __dirname });
});
