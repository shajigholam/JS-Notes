/* Express - is a popular web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and tools to handle common tasks. 
npm install express
template engines or view engine
static HTML means all the content is pre-defuned and it doesn't change. but if we want to enject some dynamic data into the HTML like from the database. to do so we can use template engines or view engine.
*** to output dynamic content or data in these kind of templates, we can use view engines or template engines(like ejs). these engines allow us to inject dynamic data and logic into them like variables, loops, then we can serve the 
resulting html page with that data to the browser.
npm install ejs
*** server-side rendering ***
our view files live on the server and the view files pass through the ejs view engine to be processed.
the engine look for any ejs tags and make an HTML page based on the template we wrote and return it to the browser.
this whole process is server-side rendering.
*** Middleware: code which runs(on the server) between getting a request and sending a response. so the order of middleware is important
there are some packages like Mogan for middleware, so we can just use them. npm install morgan
*** NoSql - MongoDb ***
in nsql db instead of having tables, rows and columns, we use collection and documents.
collections(like tables) stores specific kind of data and contains documents. for exp in user collection we can store user documents and in blog collections, blog docs
a document is like a record in sql db.so each document represent a single data in the form JSON(key value pairs)
--Mongoose is an ODM library - Object Document Mapping library
it provide us easier way to connect and communicate with db. 
-- schemas & models
schemas defines the structure of a type of data / document in the db collection (like properties & property type)
next we have to make a model based on the schema. so with that model we actually can communicate with the db collections

*/
//require express 
const express = require('express'); //returns a function
const morgan = require('morgan'); //middleware
const mongoose = require('mongoose');
const Blog = require('./models/blog');
// creating express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://sam:test1234@net-sam-tuts-del96.mongodb.net/node-tuts"; //connect to application

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//listen for requests
// app.listen(3000); --> we should move it to the callback. so after we make sure that we connected to db successfully then listen for requests

// register view engine
app.set('view engine', 'ejs'); //automatically express and ejs look into the views folder
//but if we use a differrent name instead of viewa:
// app.set('views', 'myviews')

// middleware & static files

//to make static files(like the css, images,..) public(so it'll be useable in the browser), we also need to move those files to a folder called public
app.use(express.static('public'));
//to get the data from a form
app.use(express.urlencoded({ extended: true }));

// using next(to tell the express to move on after exec)
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

//instead of coding the middleware code manually we can install third-party packages and use them like:
app.use(morgan('dev')); //this line of code do the same as the code block above

//if we use .use after .get that matches the response, .use won't execute
app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => { //this is used to add a blog to the collection
  //using the model to create an instance of a blog
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save() //save it to the blogs collection
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});
// to get all the documents
app.get('/all-blogs', (req, res) => {
  Blog.find() //use the method on the model itself
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5ea99b49b8531f40c0fde689')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});
  
app.get('/about', (req, res) => {
  // in ejs--> render
  res.render('about', { title: 'About' }); //we can send the dynamic values like an obj to the ejs(views)
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 }) //descending order
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});
// post request
app.post('/blogs', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.redirect('/blogs'); //after the new blog is saved, we redirect the user to the home page
    })
    .catch(err => {
      console.log(err);
    });
});
// get request for a single blog (Route Parameters)
app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});
// delete request
app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
/*
*** Request Types ***
GET requests to get a resource
POST requests to create new data(e.g. a new blog) - like submitting a form
DELETE requests to delete data(e.g. delete a blog)
PUT requests to update data(e.g. update a blog)
*** Route Parameters***
are part of the route that are variable that may cjange value
*/