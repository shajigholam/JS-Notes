//create the schema & model. the model wrapps around the schema to communicate with the db collection for that 
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //this is a constructor for schema
// creating instances of schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

//create model based on the schema(name of the model starts with capital letter)
const Blog = mongoose.model('Blog', blogSchema); //name of the model should be the singular of the collection name(here is blogs)
module.exports = Blog;
