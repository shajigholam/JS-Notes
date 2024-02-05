const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;

/*
Express Router
as the size of the project grows, we end up having alot of routes. 
so, to make our code cleaner we use express router, to split our routes 
into different files and manages them in small group routes that belong together.
e.g. in the code we had in the express folder, we could see that many of the routes 
were /blog. so we can have a separate express route for it.
so I copy and paste all the codes for blog route to a file in the route folder.

MVC - Model, View, Controller
MVC is a way of structuring our code & files
Model: how we describe our data structure and use them to interact with the db
View: where we make out HTML templates
Controller: it forms the link between models and views. use model to get data and
pass it to the view
*/