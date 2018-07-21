const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IdeaShema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  }
});

mongoose.model('Idea', IdeaShema);